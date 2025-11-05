import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  toasts: [],
  inbox: []
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    pushToast: {
      reducer(state, action) {
        state.toasts.push(action.payload);
      },
      prepare(payload) {
        return { payload: { id: nanoid(), ...payload } };
      }
    },
    dismissToast(state, action) {
      state.toasts = state.toasts.filter((toast) => toast.id !== action.payload);
    },
    setInbox(state, action) {
      state.inbox = action.payload;
    },
    resetNotifications() {
      return initialState;
    }
  }
});

export const { pushToast, dismissToast, setInbox, resetNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
