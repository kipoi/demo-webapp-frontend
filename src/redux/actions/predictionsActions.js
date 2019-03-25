export const PREDICTIONS_REQUESTED = 'PREDICTIONS_REQUESTED';
export const PREDICTIONS_RECEIVED = 'PREDICTIONS_RECEIVED';
export const PREDICTIONS_FAILED = 'PREDICTIONS_FAILED';

export function fetchPredictions(sequenceData) {
  return dispatch => {
    dispatch({
      type: PREDICTIONS_REQUESTED
    });

    fetch('http://localhost:5000/get_predictions', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(sequenceData)
    })
      .then(response => response.json())
      .then(predictions => dispatch({
        type: PREDICTIONS_RECEIVED,
        payload: predictions
      }))
      .catch(error => dispatch({
        type: PREDICTIONS_FAILED,
        payload: error
      }));
  }
}