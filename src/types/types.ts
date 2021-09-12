export enum ITodoActionTypes {
  CREATE_TODO = 'CREATE_TODO',
  GET_TODOS = 'CREATE_TODOS',
  GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS',
  CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS',
  DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
  CHANGE_TODO_SUCCESS = 'CHANGE_TODO_SUCCESS',
  COMPLETE_TODO_SUCCESS = 'COMPLETE_TODO_SUCCESS',
  CHANGE_TODO = 'CHANGE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  COMPLETE_TODO = 'COMPLETE_TODO',
  SHOW_ALERT = 'SHOW_ALERT',
  HIDE_ALERT = 'HIDE_ALERT',
}

export interface IAlertState {
  alert: string;
  status: string;
}

export interface IAlertReducer {
  alertReducer: IAlertState;
}

export interface ITodosType {
  todos: ITodoObject[];
}

export interface IStateObject {
  id?: string;
  todos?: ITodoObject[];
  title?: string;
  done: boolean;
}

export interface ITodosStateType {
  todos: IStateObject[],
}

export interface IPostsReducerType {
  todosReducer: ITodosType,
}

export interface ITodoObject {
  id: string;
  title: string;
  done: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IChangeObject {
  todos: IStateObject[],
  title: string,
  id: string,
  done: boolean;
}

export interface ICreateAction {
  type: ITodoActionTypes.CREATE_TODO | ITodoActionTypes.CREATE_TODO_SUCCESS;
  payload: string;
}

export interface IDeleteAction {
  type: ITodoActionTypes.DELETE_TODO | ITodoActionTypes.DELETE_TODO_SUCCESS;
  payload: string;
}

export interface IChangeAction {
  type: ITodoActionTypes.CHANGE_TODO | ITodoActionTypes.CHANGE_TODO_SUCCESS;
  payload: IChangeObject;
}

export interface IGetAction {
  type: ITodoActionTypes.GET_TODOS | ITodoActionTypes.GET_TODOS_SUCCESS;
  payload?: IStateObject
}

export interface ICompleteAction {
  type: ITodoActionTypes.COMPLETE_TODO | ITodoActionTypes.COMPLETE_TODO_SUCCESS;
  payload: IStateObject;
}

export interface IShowAlertAction {
  type: ITodoActionTypes.SHOW_ALERT;
  payload: string;
  status: string;
}

export interface IHideAlertAction {
  type: ITodoActionTypes.HIDE_ALERT;
}

export type TodoAction =
  ICreateAction
  | IDeleteAction
  | IChangeAction
  | IGetAction
  | ICompleteAction;

export type AlertAction = IShowAlertAction | IHideAlertAction;
