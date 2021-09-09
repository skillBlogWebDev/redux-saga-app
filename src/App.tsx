import React from 'react';
import PostForm from './components/PostForm/PostForm';
import GenericList from './components/Posts/Posts';
import './App.css';

function App() {

  return (
    <div className="container pt-3">
      <div className='row'>
        <div className='col'>
          <PostForm />
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
