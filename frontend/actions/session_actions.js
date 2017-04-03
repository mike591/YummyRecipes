import * as SessionApiUtil from '../util/session_api_util';

export const EXAMPLE_CONST_TYPE = "EXAMPLE_CONST_TYPE";

// Sync
const methodName = (data) => ({
  type: EXAMPLE_CONST_TYPE,
  data : data
});


// Async
export const asyncMethodName = () => dispatch => (
  SessionApiUtil.methodName()
    .then(
      res => dispatch(methodName(null))
    )
);
