import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeDock: 'chat-assist',
  isContextPanelOpen: true
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveDock(state, action) {
      state.activeDock = action.payload;
    },
    toggleContextPanel(state) {
      state.isContextPanelOpen = !state.isContextPanelOpen;
    },
    resetUi() {
      return initialState;
    }
  }
});

export const { setActiveDock, toggleContextPanel, resetUi } = uiSlice.actions;
export default uiSlice.reducer;
