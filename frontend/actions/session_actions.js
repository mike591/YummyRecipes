import * as SessionApiUtil from '../util/session_api_util';

// export const EXAMPLE_CONST_TYPE = "EXAMPLE_CONST_TYPE";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

// Sync
// const methodName = (data) => ({
//   type: EXAMPLE_CONST_TYPE,
//   data : data
// });

const getCurrentUser = (currentUser) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser : currentUser
  });
};


// Async
// export const asyncMethodName = () => dispatch => (
//   SessionApiUtil.methodName()
//     .then(
//       res => dispatch(methodName(null))
//     )
// );

export const login = (user) => dispatch => (
  SessionApiUtil.login(user)
    .then(
      res => dispatch(getCurrentUser(res))
    )
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(
      res => dispatch(getCurrentUser(null))
    )
);
