import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  status: 'idle',
  error: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchingInProgress(state) {
      state.status = 'pending';
    },
    fetchingSuccess(state, { payload }) {
      state.status = 'fulfilled';
      state.error = null;
      state.items = payload;
    },
    fetchingError(state, { payload }) {
      state.status = 'rejected';
      state.error = payload;
    },

    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            ...value,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.findIndex(task => task.id === action.payload);
        state.splice(index, 1);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
