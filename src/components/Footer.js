import React from 'react';
import PropTypes from 'prop-types';

export const Footer = ({ todos }) => (
  <footer className="footer">
    <span className="todo-count">
      {todos.filter(todo => !todo.isTodoCompleted).length}
      {' '}
      items left
    </span>

    <ul className="filters">
      <li>
        <a href="#/" className="selected">All</a>
      </li>

      <li>
        <a href="#/active">Active</a>
      </li>

      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>

    <button type="button" className="clear-completed">
      Clear completed
    </button>
  </footer>
);

Footer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    isTodoCompleted: PropTypes.bool,
  })).isRequired,
};