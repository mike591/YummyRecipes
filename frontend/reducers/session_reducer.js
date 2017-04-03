import {EXAMPLE_CONST_TYPE} from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
  currentUser: null
};

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case EXAMPLE_CONST_TYPE:
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
