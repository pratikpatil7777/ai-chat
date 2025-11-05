import { createSlice } from '@reduxjs/toolkit';

/**
 * @typedef {Object} SessionState
 * @property {string|null} onboardingStep
 * @property {string|null} selectedPlanId
 * @property {Array<string>} approvedModules
 * @property {Record<string, unknown>} uiFlags
 */

/** @type {SessionState} */
const initialState = {
  onboardingStep: null,
  selectedPlanId: null,
  approvedModules: [],
  uiFlags: {}
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    persistOnboarding(state, action) {
      const { onboardingStep, selectedPlanId } = action.payload;
      state.onboardingStep = onboardingStep;
      state.selectedPlanId = selectedPlanId;
    },
    setApprovedModules(state, action) {
      state.approvedModules = action.payload;
    },
    setUiFlags(state, action) {
      state.uiFlags = { ...state.uiFlags, ...action.payload };
    },
    resetSession() {
      return initialState;
    }
  }
});

export const { persistOnboarding, setApprovedModules, setUiFlags, resetSession } =
  sessionSlice.actions;
export default sessionSlice.reducer;
