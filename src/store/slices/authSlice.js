import { createSlice } from '@reduxjs/toolkit';

/**
 * @typedef {Object} AuthState
 * @property {boolean} isAuthenticated
 * @property {string|null} userId
 * @property {string|null} tenantId
 * @property {Array<string>} roles
 * @property {Array<string>} moduleGrants
 */

/** @type {AuthState} */
const initialState = {
  isAuthenticated: false,
  userId: null,
  tenantId: null,
  roles: [],
  moduleGrants: []
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession(state, action) {
      const { userId, tenantId, roles, moduleGrants } = action.payload;
      state.isAuthenticated = true;
      state.userId = userId;
      state.tenantId = tenantId;
      state.roles = roles;
      state.moduleGrants = moduleGrants;
    },
    clearSession() {
      return initialState;
    }
  }
});

export const { setSession, clearSession } = authSlice.actions;
export default authSlice.reducer;
