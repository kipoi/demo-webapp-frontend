import {getUrl} from '../../helpers/URL';

export const MODEL_LIST_REQUESTED = 'MODEL_LIST_REQUESTED';
export const MODEL_LIST_RECEIVED = 'MODEL_LIST_RECEIVED';
export const MODEL_LIST_FAILED = 'MODEL_LIST_FAILED';


export function fetchModelList() {
  return dispatch => {
    dispatch({
      type: MODEL_LIST_REQUESTED
    });

    fetch(getUrl('/metadata/model_list'))
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
