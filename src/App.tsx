import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodoForm from './components/TodoForm/PostForm';
import GenericList from './components/Todos/Todos';
import { getTodos } from './redux/actions/actions';
import './App.css';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="container pt-3">
      <div className='row'>
        <div className='col'>
          <TodoForm />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h2>Новые Посты</h2>
          <GenericList />
        </div>
      </div>
    </div>
  );
}

export default App;
