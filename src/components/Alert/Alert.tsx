/* eslint-disable linebreak-style */
import React from 'react';
import { IAlertState } from '../../types/types';

interface IAlertProps {
    props: IAlertState;
}

export const Alert = ({ props }: IAlertProps): JSX.Element => {
  return (
    <div className={`alert alert-${props.status}`}>
      {props.alert}
    </div>
  );
};