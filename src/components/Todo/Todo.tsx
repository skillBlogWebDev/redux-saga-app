import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { IPostsReducerType, ITodoObject } from '../../types/types';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { showAlert } from '../../redux/actions/actions';

interface PostProps {
  editTodo: (todos: ITodoObject[], arg0: string, arg1: string, arg2: boolean) => void;
  removeTodo: (arg0: string) => void;
  todoDone: (todos: ITodoObject[], arg0: string, arg1: boolean) => void;
  todo: ITodoObject;
}

export const Post = (props: PostProps): JSX.Element => {
  const [editTodo, setEditTodo] = useState(false);
  const [completeTodo, setCompleteTodo] = useState(props.todo.done);
  const [title, setTitle] = useState('');
  const todos =  useSelector((state: IPostsReducerType) => state.todosReducer.todos);
  const dispatch = useDispatch();

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      props.editTodo(todos, title, props.todo.id, props.todo.done);
      setEditTodo(!editTodo);
      dispatch(showAlert('Дело успешно изменено!', 'success'));
    }
  };

  return (
    <li
      id={props.todo.id}
      className={
        `post list-group-item d-flex justify-content-between align-items-center 
        ${completeTodo ? 'list-group-item-success' : ''}`
      }
    >
      <div 
        onKeyPress={onSubmit}>
        {editTodo ? <input
          onChange={changeInputHandler}
          type="text"
        /> : <span className={completeTodo ? 'title-done' : ''}>{props.todo.title}</span>}</div>

      <div>
        <button
          type="button"
          className="btn btn-success post-btn"
          onClick={() => {
            props.todoDone(todos, props.todo.id, !completeTodo);
            setCompleteTodo(!completeTodo);
            dispatch(showAlert(`Дело успешно ${completeTodo ? 'возобновлено' : 'выполнено'}!`, 'success'));
          }}
        >
          Complete
        </button>
        <button
          type="button"
          className="post-btn btn btn-primary"
          onClick={() => setEditTodo(!editTodo)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            props.removeTodo(props.todo.id);
            dispatch(showAlert('Дело успешно удалено!', 'success'));
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
