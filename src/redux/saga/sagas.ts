import { takeEvery, call, put, Effect } from 'redux-saga/effects';
import { 
  IChangeAction, 
  ICreateAction, 
  IDeleteAction, 
  IStateObject, 
  ITodoActionTypes, 
  ITodoObject } from '../../types/types';
import axios from 'axios';
import { showAlert } from '../actions/actions';

function* sagaGetTodos(): Generator<Effect, void, ITodoObject[]> {
  try {
    const todos: ITodoObject[] = yield call(getTodos);

    yield put({ type: ITodoActionTypes.GET_TODOS_SUCCESS, payload: todos });
  } catch (e) {
    yield put(showAlert(`Не удалось загрузить дела - ${e}`, 'warning'));
  }
}

function* sagaCreateTodo(action: ICreateAction): Generator<Effect, void> {
  try {
    const todoObject = {
      title: action.payload,
      done: false,
    };
    
    const todo = yield call(createTodo, todoObject);

    yield put({ type: ITodoActionTypes.CREATE_TODO_SUCCESS, payload: todo });
  } catch (e) {
    yield put(showAlert(`Не удалось создать дело - ${e}`, 'warning'));
  }
}

function* sagaDeleteTodo(action: IDeleteAction): Generator<Effect, void> {
  try {
    yield call(deleteTodo, action.payload);

    yield put({ type: ITodoActionTypes.DELETE_TODO_SUCCESS, payload: action.payload });
  } catch (e) {
    yield put(showAlert(`Не удалось удалить дело - ${e}`, 'warning'));
  }
}

function* sagaChangeTodo(action: IChangeAction): Generator<Effect, void, ITodoObject> {
  try {
    const todo = {
      title: action.payload.title,
      done: action.payload.done,
      id:  action.payload.id,
    };

    const res: ITodoObject = yield call(changeTodo, todo);

    const newTodos = action.payload.todos.map((item: IStateObject) => {
      if (item.id === action.payload.id) {
        item = res;
      }
  
      return item;
    });

    yield put({ type: ITodoActionTypes.CHANGE_TODO_SUCCESS, payload: newTodos });
  } catch (e) {
    yield put(showAlert(`Не удалось изменить дело - ${e}`, 'warning'));
  }
}

function* sagaCompleteTodo(action: IChangeAction): Generator<Effect, void> {
  try {
    const todo = {
      done: action.payload.done,
      id: action.payload.id,
    };

    yield call(completeTodo, todo);
    const todoIndex = action.payload.todos.findIndex(item => item.id === action.payload.id);

    action.payload.todos[todoIndex].done = !action.payload.todos[todoIndex].done;

    yield put({ type: ITodoActionTypes.COMPLETE_TODO_SUCCESS, payload: action.payload.todos });
  } catch (e) {
    yield put(showAlert(`Не удалось отметить дело - ${e}`, 'warning'));
  }
}

async function getTodos(): Promise<IStateObject[]> {
  const res = await axios.get('http://localhost:3000/todos');
  return res.data;
}

async function createTodo(todo: any): Promise<void> {
  const res = await axios.post('http://localhost:3000/todos', todo);
  return res.data;
}

async function deleteTodo(id: any): Promise<void> {
  await axios.delete(`http://localhost:3000/todos/${id}`);
}

async function changeTodo(todo: any): Promise<IStateObject> {
  const res = await axios.patch(`http://localhost:3000/todos/${todo.id}`, todo);
  return res.data[1][0];
}

async function completeTodo(todo: any): Promise<void> {
  await axios.patch(`http://localhost:3000/todos/${todo.id}`, todo);
}

export function* sagaWatcher(): Generator<{
  [Symbol.iterator](): IterableIterator<Effect>;
}, void> {
  yield takeEvery(ITodoActionTypes.GET_TODOS, sagaGetTodos);
  yield takeEvery(ITodoActionTypes.CREATE_TODO, sagaCreateTodo);
  yield takeEvery(ITodoActionTypes.DELETE_TODO, sagaDeleteTodo);
  yield takeEvery(ITodoActionTypes.CHANGE_TODO, sagaChangeTodo);
  yield takeEvery(ITodoActionTypes.COMPLETE_TODO, sagaCompleteTodo);
}
