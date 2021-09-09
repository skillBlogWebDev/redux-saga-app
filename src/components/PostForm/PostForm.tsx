import React, { ChangeEvent, FormEvent, useReducer, useState } from 'react';
import { initialState, ITodoActionTypes } from '../../types/types';
import { todosReducer } from '../../redux/todosReducer';
import { createTodo } from '../../redux/actions/actions';

function PostForm() {
  const [title, setTitle] = useState('');

  const [state, dispatch] = useReducer(todosReducer, initialState);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    createTodo(title, dispatch);
  };

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className='mb-5'>
      <div className='form-group mb-3'>
        <label htmlFor="exampleFormControlInput1" className="form-label">Заголовок поста</label>
        <input
          type="text"
          className="form-control"
          id='title'
          name='title'
          value={title}
          onChange={changeInputHandler}
        />
      </div>
      <button className="btn btn-success" type="submit">Создать</button>
    </form>
  );
}

export default PostForm;
