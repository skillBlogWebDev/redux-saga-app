/* eslint-disable linebreak-style */
import axios from 'axios';
import { ITodoActionTypes } from '../../types/types';

const url = process.env.REACT_APP_DB_URL;

const showLoader = (dispatch: any) => dispatch({ type: ITodoActionTypes.SHOW_LOADER });

export const getTodos = async (dispatch: any) => {
  showLoader(dispatch);
  const res = await axios.get(`${url}`);
    
  const payload = Object.keys(res.data).map(key => {
    return {
      ...res.data[key],
      id: key,
    };
  });
    
  dispatch({ type: ITodoActionTypes.GET_TODOS, payload });
};

export const createTodo = async (title: string, dispatch: any) => {
  const todo = {
    title, 
    date: false,
  };

  //   try {
  const res = await axios.post(`${url}`, todo);
  console.log(res);

  const payload = {
    ...todo,
  };

  dispatch({ type: ITodoActionTypes.CREATE_TODO, payload });

//   } catch (e: any) {
//     throw new Error(e.message);
//   }
};

const deleteTodo = async (id: string | number, dispatch: any) => {
  await axios.delete(`${url}/${id}`);

  dispatch({
    type: ITodoActionTypes.DELETE_TODO,
    payload: id,
  });
};