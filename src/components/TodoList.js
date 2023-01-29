import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions";

const TodoList = ({ todos, fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { fetchTodos })(TodoList);