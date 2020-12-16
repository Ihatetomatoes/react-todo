import { useEffect, useState } from "react";
import { emptyTask } from "../utils";

const AddTask = ({ handleSubmit, selectedTask }) => {
  const [task, setTask] = useState(emptyTask);

  useEffect(() => {
    if (selectedTask) {
      setTask(selectedTask);
    } else {
      setTask(emptyTask);
    }
  }, [selectedTask]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (task.name.trim() !== "") {
      // submit task
      handleSubmit(task);

      // reset form
      setTask(emptyTask);
    }
  };

  const handleChange = (e) => {
    if (!task.id) {
      // create new task
      setTask({
        ...task,
        [e.target.name]: e.target.value,
        id: Date.now(),
      });
    } else {
      // update existing task
      setTask({
        ...task,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-md border border-gray-200 p-2 flex"
    >
      <div className="flex flex-col mr-4">
        <label htmlFor="taskName">Task</label>
        <input
          type="text"
          value={task.name}
          id="taskName"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col mr-4">
        <label htmlFor="prioritySelect">Priority</label>
        <select
          id="prioritySelect"
          value={task.priority}
          name="priority"
          onChange={handleChange}
        >
          <option value="0">High</option>
          <option value="1">Medium</option>
          <option value="2">Low</option>
        </select>
      </div>
      <div className="flex flex-col">
        <button
          type="submit"
          className="py-2 px-6 bg-blue-500 text-white rounded-md self-end mt-auto border border-blue-500"
          data-testid="submitBtn"
        >
          {selectedTask ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddTask;
