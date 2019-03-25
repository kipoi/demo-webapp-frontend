import {SAMPLES_FAILED, SAMPLES_RECEIVED, SAMPLES_REQUESTED} from "../actions/sampleActions";

const initialState = {
  sampleSequences: null,
  loading: false,
  error: null
};

export default function samplesReducer(state = initialState, action) {
  switch (action.type) {
    case SAMPLES_REQUESTED:
      state = Object.assign({}, state, {loading: true, error: null});
      break;
    case SAMPLES_RECEIVED:
      state = Object.assign({}, state, {sampleSequences: action.payload, loading: false, error: null});
      break;
    case SAMPLES_FAILED:
      state = Object.assign({}, state, {sampleSequences: null, loading: false, error: action.payload});
      break;
    default:
      break;
  }

  return state;
};