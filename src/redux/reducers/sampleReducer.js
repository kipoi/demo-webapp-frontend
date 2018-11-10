import {
  GET_SAMPLES_BEGIN,
  GET_SAMPLES_SUCCESS,
  GET_SAMPLES_FAILURE
} from '../actions/sampleActions';

const initialState = {
  sampleSequences: null,
  sampleSequencesLoading: false,
  sampleSequencesError: null
};

export default function samplesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SAMPLES_BEGIN:
      return {
        ...state,
        sampleSequencesLoading: true,
        sampleSequencesError: null
      };

    case GET_SAMPLES_SUCCESS:
      return {
        ...state,
        sampleSequences: action.payload.sampleSequences,
        sampleSequencesLoading: false
      };

    case GET_SAMPLES_FAILURE:
      return {
        ...state,
        sampleSequencesLoading: false,
        sampleSequencesError: action.payload.error,
        sampleSequences: null
      };

    default:
      return state;
  }
};