const PERSIST_KEY = 'aperture::session-ui';

const whitelist = ['session', 'ui'];

export const sessionStorageMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  if (typeof window === 'undefined') {
    return result;
  }

  try {
    const state = storeAPI.getState();
    const persisted = whitelist.reduce((acc, key) => {
      acc[key] = state[key];
      return acc;
    }, {});

    sessionStorage.setItem(PERSIST_KEY, JSON.stringify(persisted));
  } catch (error) {
    console.warn('sessionStorageMiddleware', error);
  }
  return result;
};

export const clearSessionStorage = () => {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(PERSIST_KEY);
};

export const getPersistedState = () => {
  if (typeof window === 'undefined') return undefined;
  const raw = sessionStorage.getItem(PERSIST_KEY);
  if (!raw) return undefined;
  try {
    return JSON.parse(raw);
  } catch (error) {
    console.warn('Failed to parse persisted state', error);
    return undefined;
  }
};
