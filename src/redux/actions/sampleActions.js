export const SAMPLES_REQUESTED = 'SAMPLES_REQUESTED';
export const SAMPLES_RECEIVED = 'SAMPLES_RECEIVED';
export const SAMPLES_FAILED = 'SAMPLES_FAILED';

export function fetchSampleSequences() {
  return dispatch => {
    dispatch({
      type: SAMPLES_REQUESTED
    });

    fetch('http://localhost:5000/get_samples')
      .then(response => response.json())
      .then(samples => dispatch({
        type: SAMPLES_RECEIVED,
        payload: samples
      }))
      .catch(error => dispatch({
        type: SAMPLES_FAILED,
        payload: error
      }));
  };
}
