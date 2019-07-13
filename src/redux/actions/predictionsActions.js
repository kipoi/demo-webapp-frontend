export const PREDICTIONS_REQUESTED = 'PREDICTIONS_REQUESTED';
export const PREDICTIONS_RECEIVED = 'PREDICTIONS_RECEIVED';
export const PREDICTIONS_FAILED = 'PREDICTIONS_FAILED';

export function fetchPredictions(data) {
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
      body: data
    })
      .then(response => response.json())
      .then(predictions => {
        if (predictions.type === 'error') {
          dispatch({
            type: PREDICTIONS_FAILED,
            payload: predictions.message
          });
        }

        else {
          dispatch({
            type: PREDICTIONS_RECEIVED,
            payload: predictions
          });
        }
      })
      .catch(error => dispatch({
        type: PREDICTIONS_FAILED,
        payload: error
      }));
  }
}