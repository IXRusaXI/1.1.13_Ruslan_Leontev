import TodoInput from "../Inputs/TodoInput";

function TodoList() {
    return (
        <ul className="todo-list">
          <TodoInput />
          <TodoInput />
          <TodoInput />
        </ul>
    );
}

export default TodoList;