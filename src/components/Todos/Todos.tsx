import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Post } from '../Todo/Todo';
import { IPostsReducerType, ITodoObject } from '../../types/types';
import { changeTodo, completeTodo, deleteTodo } from '../../redux/actions/actions';
import './styles.css';

const GenericList = (): JSX.Element => {
  const dispatch = useDispatch();
  const todos =  useSelector((state: IPostsReducerType) => state.todosReducer.todos);

  const editTodo = (todos: ITodoObject[], text: string, id: string, done: boolean) => {
    dispatch(changeTodo(todos, text, id, done));
  };

  const removeTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const todoDone = (todos: ITodoObject[], id: string, done: boolean) => {
    dispatch(completeTodo(todos, id, done));
  };

  return (
    <TransitionGroup component='ul' className='list-group'>
      {todos.map(todo => (
        <CSSTransition
          timeout={800}
          classNames={'post'}
          key={todo.id}
        >
          <Post
            key={todo.id}
            editTodo={editTodo}
            removeTodo={removeTodo}
            todoDone={todoDone}
            todo={todo}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default GenericList;
