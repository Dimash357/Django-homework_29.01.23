import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import TodoList from './components/TodoList';

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;