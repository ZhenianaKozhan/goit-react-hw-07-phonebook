import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contactList;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contactList, filter) => {
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
