import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';
import { selectContacts } from './slice';

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, query) => {
    return contacts.filter(contact => {
      const queryLowerCase = query.toLowerCase();
      return (
        contact.name.toLowerCase().includes(queryLowerCase) ||
        contact.number.toLowerCase().includes(queryLowerCase)
      );
    });
  }
);
