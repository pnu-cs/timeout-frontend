import { createSelector } from 'reselect';

const userSelector = (state: any) => state.userReducer;

export const selectIsUserLoading = createSelector(userSelector, ({ isLoading }) => isLoading);

export const selectIsUserLoggedIn = createSelector(userSelector, ({ validToken }) => validToken);

export const selectIsUserError = createSelector(userSelector, ({ error }) => error);
