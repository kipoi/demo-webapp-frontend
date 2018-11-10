export const GET_SAMPLES_BEGIN = 'GET_SAMPLES_BEGIN';
export const GET_SAMPLES_SUCCESS = 'GET_SAMPLES_SUCCESS';
export const GET_SAMPLES_FAILURE = 'GET_SAMPLES_FAILURE';

export function fetchSampleSequences() {
  return dispatch => {
    dispatch(fetchSampleSequencesBegin());
    return fetch('http://localhost:5000/get_samples')
      .then(response => {
        return response.json().then(body => {
          if (response.status === 200) {
            dispatch(fetchSampleSequencesSuccess(body));
            return body;
          }

          else {
            throw body;
          }
        })
      })
      .catch(error => dispatch(fetchSampleSequencesFailure(error)));
  }
}

export const fetchSampleSequencesBegin = () => ({
  type: GET_SAMPLES_BEGIN
});

export const fetchSampleSequencesSuccess = sampleSequences => ({
  type: GET_SAMPLES_SUCCESS,
  payload: {sampleSequences}
});

export const fetchSampleSequencesFailure = error => ({
  type: GET_SAMPLES_FAILURE,
  payload: {error}
});