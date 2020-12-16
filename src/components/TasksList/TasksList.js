import { Task } from "../";

const TasksList = ({
  title = "",
  tasks = [],
  handleDelete,
  handleCompletion,
  handleSelect,
  cancelEdit,
  selectedTask,
}) => (
  <div className="mt-8">
    <h2 className="p-2 border-b border-gray-200" data-testid="listTitle">
      {title} ({tasks.length})
    </h2>
    {tasks.map((task) => {
      const taskProps = {
        handleDelete,
        handleCompletion,
        handleSelect,
        cancelEdit,
        isSelected: selectedTask && selectedTask.id === task.id,
      };
      return <Task key={task.id} task={task} {...taskProps} />;
    })}
  </div>
);

export default TasksList;
