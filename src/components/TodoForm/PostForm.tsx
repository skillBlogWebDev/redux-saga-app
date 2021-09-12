import React, { ChangeEvent, FormEvent, useState } from 'react';
import { createTodo, showAlert } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '../Alert/Alert';
import { IAlertReducer, IAlertState } from '../../types/types';

function TodoForm(): JSX.Element {
  const [title, setTitle] = useState('');
  const state: IAlertState = useSelector((state: IAlertReducer) => state.alertReducer);

  const dispatch = useDispatch();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim()) {
      dispatch(showAlert('Название дела не может быть пустым!', 'warning'));
      return;
    }

    dispatch(createTodo(title));
    dispatch(showAlert('Дело успешно создано!', 'success'));
    setTitle('');
  };

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className='mb-5'>
      {state.alert.length > 0 && <Alert props={state}/>}
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

export default TodoForm;
