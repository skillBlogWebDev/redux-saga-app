import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Post } from '../Post/Post';
import { ITodoActionTypes, IPostsReducerType } from '../../types/types';
import './styles.css';

const GenericList = () => {
  const dispatch = useDispatch();
  const postsList =  useSelector((state: IPostsReducerType) => state.todosReducer.todos);

  if (!postsList.length) {
    return <p style={{ fontSize: 20 }} className='text-center'>Постов пока нет</p>;
  }

  return (
    <TransitionGroup component='ul' className='list-group'>
      {postsList.map(post => (
        <CSSTransition
          timeout={800}
          classNames={'post'}
          key={post.id}
        >
          {/* <Post
            key={post.id}
            // changePost={changePost}
            // deletePost={deletePost}
            todo={post}
          /> */}
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default GenericList;
