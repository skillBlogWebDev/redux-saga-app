import { ITodoActionTypes, ITodosType, ITodoObject, ITodosStateType, TodoAction, initialState } from '../types/types';

const handlers: any = {
  [ITodoActionTypes.CREATE_TODO]: (state: ITodosType, { payload }: any) => ({
    ...state,
    todos: [...state.todos, payload],
  }),
  [ITodoActionTypes.GET_TODOS]: (state: ITodosType, { payload }: any) => ({ ...state, todos: payload }),
  [ITodoActionTypes.DELETE_TODO]: (state: ITodosType, { payload }: any) => ({ 
    ...state, todos: state.todos.filter((todo: ITodoObject) => todo.id !== payload),
  }),
  [ITodoActionTypes.SHOW_LOADER]: (state: ITodosType) => ({ ...state, loading: true }),
  [ITodoActionTypes.HIDE_LOADER]: (state: ITodosType) => ({ ...state, loading: false }),
  DEFAULT: (state: ITodoObject) => state,
};

export const todosReducer = (state: ITodosStateType, action: TodoAction) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return initialState;
};
