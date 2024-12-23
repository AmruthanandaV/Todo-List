
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
