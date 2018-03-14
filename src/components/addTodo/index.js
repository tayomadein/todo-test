import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo, undoDelete }) => {
  let input;

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        submitTodo(input.value);
        input.value = '';
      }}
      >
        <input
          className="todo-input"
          ref={(element) => {
            input = element;
          }}
        />

        <button type="submit" className="todo-submit">
          Add Todo
        </button>

        <button className="undo-delete" onClick={() => undoDelete()}>
          Undo Delete
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  undoDelete: PropTypes.func.isRequired,
};

export default AddTodo;
