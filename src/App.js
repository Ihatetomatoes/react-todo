import { useState } from "react";
import { AddTask, TasksList } from "./components";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleSubmit = (newTask) => {
    const index = tasks.findIndex((task) => task.id === newTask.id);
    if (index === -1) {
      setTasks([...tasks, newTask]);
    } else {
      const newTasks = [...tasks];
      newTasks[index] = newTask;
      setTasks([...newTasks]);
    }
    cancelEdit();
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks([...newTasks]);
  };

  const handleCompletion = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    const newTasks = [...tasks];
    newTasks[index].completed = !tasks[index].completed;
    setTasks([...newTasks]);
  };

  const handleSelect = (task) => {
    setSelectedTask(task);
  };

  const cancelEdit = () => {
    setSelectedTask(null);
  };

  const uncompletedTasks = tasks
    .filter((task) => task.completed !== true)
    .sort((a, b) => a.priority - b.priority || a.name.localeCompare(b.name));
  const completedTasks = tasks.filter((task) => task.completed === true);

  const taskListProps = {
    handleDelete,
    handleCompletion,
    handleSelect,
    selectedTask,
    cancelEdit,
  };

  return (
    <div className="flex flex-col max-w-lg mx-auto py-20">
      <h1 className="text-lg font-bold px-2 mb-4" data-testid="mainTitle">
        Todo List ({tasks.length} tasks)
      </h1>
      <AddTask handleSubmit={handleSubmit} selectedTask={selectedTask} />

      {uncompletedTasks.length ? (
        <TasksList title="Tasks" tasks={uncompletedTasks} {...taskListProps} />
      ) : (
        <p className="p-2" data-testid="emptyAppMessage">
          There are no tasks. Add some.
        </p>
      )}

      {completedTasks.length ? (
        <TasksList
          title="Completed Tasks"
          tasks={completedTasks}
          {...taskListProps}
        />
      ) : null}
    </div>
  );
}

export default App;
