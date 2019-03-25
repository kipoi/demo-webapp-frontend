import {PREDICTIONS_FAILED, PREDICTIONS_RECEIVED, PREDICTIONS_REQUESTED} from "../actions/predictionsActions";

const initialState = {
  predictions: null,
  loading: false,
  error: null
};

export default function predictionsReducer(state = initialState, action) {
  switch (action.type) {
    case PREDICTIONS_REQUESTED:
      state = Object.assign({}, state, {loading: true, error: null});
      break;
    case PREDICTIONS_RECEIVED:
      state = Object.assign({}, state, {predictions: action.payload, error: null, loading: false});
      break;
    case PREDICTIONS_FAILED:
      state = Object.assign({}, state, {predictions: null, loading: false, error: action.payload});
      break;
    default:
      break;
  }

  return state;
};