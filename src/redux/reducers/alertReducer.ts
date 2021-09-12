/* eslint-disable linebreak-style */
import { AlertAction, IAlertState, ITodoActionTypes } from '../../types/types';

const initialState = {
  alert: '',
  status: '',
};

export const alertReducer = (state: IAlertState = initialState, action: AlertAction): IAlertState => {
  switch (action.type) {
  case ITodoActionTypes.SHOW_ALERT:
    return { ...state, alert: action.payload, status: action.status };
  case ITodoActionTypes.HIDE_ALERT:
    return { ...state, alert: '', status: '' };
  default:
    return state;
  }
};