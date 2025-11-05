'use client';

import { configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { sessionStorageMiddleware, getPersistedState } from '@/store/middleware/sessionStorageMiddleware';
import rootReducer from '@/store/rootReducer';
import { api } from '@/store/services/api';

let storeInstance;

function createStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat([
        sessionStorageMiddleware,
        api.middleware
      ]),
    preloadedState
  });
}

export function initializeStore(preloadedState) {
  const persistedState = typeof window !== 'undefined' ? getPersistedState() : undefined;
  const mergedState = { ...persistedState, ...preloadedState };
  const _store = storeInstance ?? createStore(mergedState);

  if (preloadedState && storeInstance) {
    storeInstance = createStore({ ...storeInstance.getState(), ...mergedState });
  }

  if (typeof window === 'undefined') return _store;
  if (!storeInstance) storeInstance = _store;
  return _store;
}

export function useAppStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
