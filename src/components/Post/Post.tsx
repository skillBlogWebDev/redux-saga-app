import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { ITodoObject } from '../../types/types';
import './styles.css';

interface PostProps {
  changePost: (arg0: string, arg1: string) => void;
  deletePost: (arg0: string) => void;
  todo: ITodoObject;
}

export const Post = (props: PostProps) => {
  const [editPost, setEditPost] = useState(false);

  const editInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    props.changePost(event.target.value, props.todo.id);
  };

  const onSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setEditPost(!editPost);
    }
  };

  return (
    <li
      id={props.todo.id}
      className="post list-group-item d-flex justify-content-between align-items-center"
    >
      <div onKeyPress={onSubmit}>{editPost ? <input onChange={editInputValue} type="text" /> : props.todo.title}</div>

      <div>
        <button
          type="button"
          className="post-btn btn btn-primary"
          onClick={() => setEditPost(!editPost)}
        >
          Изменить
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => props.deletePost(props.todo.id)}
        >
          Удалить
        </button>
      </div>
    </li>
  );
};
