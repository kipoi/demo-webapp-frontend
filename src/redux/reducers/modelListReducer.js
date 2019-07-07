import {MODEL_LIST_FAILED, MODEL_LIST_RECEIVED, MODEL_LIST_REQUESTED} from "../actions/modelListActions";

const initialState = {
  models: null,
  loading: false,
  error: null
};

export default function modelListReducer(state = initialState, action) {
  switch (action.type) {
    case MODEL_LIST_REQUESTED:
      state = Object.assign({}, state, {loading: true, error: null});
      break;
    case MODEL_LIST_RECEIVED:
      state = Object.assign({}, state, {models: action.payload, loading: false, error: null});
      break;
    case MODEL_LIST_FAILED:
      state = Object.assign({}, state, {models: null, loading: false, error: action.payload});
      break;
    default:
      break;
  }

  return state;
};