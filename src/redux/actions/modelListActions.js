export const MODEL_LIST_REQUESTED = 'MODEL_LIST_REQUESTED';
export const MODEL_LIST_RECEIVED = 'MODEL_LIST_RECEIVED';
export const MODEL_LIST_FAILED = 'MODEL_LIST_FAILED';

export function fetchModelList() {
  return dispatch => {
    dispatch({
      type: MODEL_LIST_REQUESTED
    });

    fetch('http://localhost:5000/metadata/model_list/kipoi-py3-keras1.2')
      .then(response => response.json())
      .then(models => dispatch({
        type: MODEL_LIST_RECEIVED,
        payload: models
      }))
      .catch(error => dispatch({
        type: MODEL_LIST_FAILED,
        payload: error
      }));
  };
}
