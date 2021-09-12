import { 
  IChangeAction,
  ICompleteAction,
  ICreateAction, 
  IDeleteAction, 
  IGetAction, 
  IHideAlertAction, 
  IShowAlertAction, 
  ITodoActionTypes, 
  ITodoObject,
} from '../../types/types';

export const getTodos = (): IGetAction => {
  return {
    type: ITodoActionTypes.GET_TODOS,
  };
};

export const createTodo = (title: string): ICreateAction => {
  return {
    type: ITodoActionTypes.CREATE_TODO,
    payload: title,
  };
};

export const deleteTodo = (id: string): IDeleteAction => {
  return {
    type: ITodoActionTypes.DELETE_TODO,
    payload: id,
  };
};

export const changeTodo = (todos: ITodoObject[], title: string, id: string, done: boolean): IChangeAction => {
  return {
    type: ITodoActionTypes.CHANGE_TODO,
    payload: {
      todos,
      title,
      id,
      done,
    },
  };
};

export const completeTodo = (todos: ITodoObject[], id: string, done: boolean): ICompleteAction => {
  return {
    type: ITodoActionTypes.COMPLETE_TODO,
    payload: {
      todos,
      id,
      done,
    },
  };
};

export const hideAlert = (): IHideAlertAction => {
  return {
    type: ITodoActionTypes.HIDE_ALERT,
  };
};

export const showAlert = (text: string, status: string) => {
  return (dispatch: React.Dispatch<IShowAlertAction | IHideAlertAction>): void => {
    dispatch({
      type: ITodoActionTypes.SHOW_ALERT,
      payload: text,
      status,
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
};
