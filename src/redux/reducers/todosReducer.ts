import {
  IStateObject,
  ITodoActionTypes,
  ITodoObject,
  ITodosStateType,
  TodoAction,
} from '../../types/types';

export const initialState = {
  todos: [],
};

export const todosReducer = (state: ITodosStateType = initialState, action: TodoAction): {
  todos: (string | IStateObject)[] | ITodoObject;
} | {
  todos: IStateObject | undefined;
} => {
  switch (action.type) {
  case ITodoActionTypes.CREATE_TODO_SUCCESS:
    return { ...state, todos: [...state.todos, action.payload] };
  case ITodoActionTypes.GET_TODOS_SUCCESS:
    return { ...state, todos: action.payload };
  case ITodoActionTypes.DELETE_TODO_SUCCESS:
    return { ...state, todos: state.todos.filter((todo: IStateObject) => todo.id !== action.payload) };
  case ITodoActionTypes.CHANGE_TODO_SUCCESS:
    return { ...state, todos: action.payload };
  case ITodoActionTypes.COMPLETE_TODO_SUCCESS:
    return { ...state, todos: action.payload };
  default:
    return state;
  }
};
