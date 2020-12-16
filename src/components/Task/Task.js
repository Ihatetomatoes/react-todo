import { Pill } from "../";
import { emptyTask } from "../utils";

const priorities = {
  0: "high",
  1: "medium",
  2: "low",
};

const Task = ({
  task = emptyTask,
  handleDelete,
  handleCompletion,
  handleSelect,
  cancelEdit,
  isSelected,
}) => {
  const { name, priority, completed, id } = task;
  return (
    <div className="p-2 border-b border-gray-200 flex flex-row items-center">
      <input
        type="checkbox"
        className="rounded text-blue-500 mr-2"
        onChange={() => handleCompletion(id)}
        checked={completed}
        data-testid="completedCheckbox"
      />{" "}
      <span className="mr-2" data-testid="taskName">
        {name}
      </span>{" "}
      <Pill priority={priorities[priority]} />
      <div className="ml-auto self-end">
        {isSelected ? (
          <button onClick={() => cancelEdit()} data-testid="cancelEditBtn">
            Cancel
          </button>
        ) : (
          <button
            type="button"
            className="mr-2"
            onClick={() => handleSelect(task)}
            data-testid="selectTaskBtn"
          >
            Edit
          </button>
        )}

        <button
          type="button"
          onClick={() => handleDelete(id)}
          data-testid="deleteBtn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
