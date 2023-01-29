import { FETCH_TODOS } from './types';

export const fetchTodos = () => async dispatch => {
  const response = await axios.get('/todos/');

  dispatch({ type: FETCH_TODOS, payload: response.data });
};