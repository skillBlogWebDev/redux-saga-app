export enum ITodoActionTypes {
  CREATE_TODO = 'CREATE_TODO',
  GET_TODOS = 'CREATE_TODOS',
  CHANGE_TODO = 'CHANGE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  SHOW_LOADER = 'SHOW_LOADER',
  HIDE_LOADER = 'HIDE_LOADER',
}

export const initialState = {
  todos: [],
  loading: false,
};

export interface ITodosType {
  todos: ITodoObject[];
}

interface IStateObject {
  id: string;
  title: string;
}

export interface ITodosStateType {
  todos: IStateObject[],
}

export interface IPostsReducerType {
  todosReducer: ITodosType,
}

export interface ILoadingType {
  loading: boolean;
}

export interface ILoaderReducerType {
  loaderReducer: ILoadingType;
}

export interface ITodoObject {
  id: string;
  title: string;
  todos: IStateObject;
}

interface ICreatePostsAction {
  type: ITodoActionTypes.CREATE_TODO;
  payload: ITodoObject;
}

interface IShowLoaderAction {
  type: ITodoActionTypes.SHOW_LOADER;
}

interface IHideLoaderAction {
  type: ITodoActionTypes.HIDE_LOADER;
}

interface IDeleteAction {
  type: ITodoActionTypes.DELETE_TODO,
  payload: string;
}

interface IChangeAction {
  type: ITodoActionTypes.CHANGE_TODO,
  id: string;
  value: string;
}

interface IGetAction {
  type: ITodoActionTypes.GET_TODOS,
  id: string;
  value: string;
  payload: IStateObject;
}

export type TodoAction =
  ICreatePostsAction
  | IShowLoaderAction
  | IHideLoaderAction
  | IDeleteAction
  | IChangeAction
  | IGetAction;
