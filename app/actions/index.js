import { NavigationActions } from 'react-navigation';

import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_SELECTED,
  USER_DISMISSED,
  USER_UPDATED,
  POST_SELECTED,
} from './types';

export const logInUser = user => ({
  type: USER_LOGGED_IN,
  payload: user,
});

export const logOutUser = () => ({
  type: USER_LOGGED_OUT,
});

export const selectUser = user => (
  (dispatch) => {
    dispatch({
      type: USER_SELECTED,
      payload: user,
    });

    dispatch(NavigationActions.navigate({
      routeName: 'Profile',
    }));
  }
);

export const dismissUser = () => ({
  type: USER_DISMISSED,
});

export const updateUser = user => ({
  type: USER_UPDATED,
  payload: user,
});

export const selectPost = post => (
  (dispatch) => {
    dispatch({
      type: POST_SELECTED,
      payload: post,
    });

    dispatch(NavigationActions.navigate({
      routeName: 'PostDetail',
    }));
  }
);
