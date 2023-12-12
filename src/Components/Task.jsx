export default function Task({ task, index, selectedWorkout, taskDelete }) {
  const handleTaskDelete = () => {
    selectedWorkout.task.splice(index, 1);
    taskDelete(selectedWorkout);
  };

  return (
    <div className="individual-task">
      <span>{task}</span>
      <button onClick={handleTaskDelete}>Clear</button>
    </div>
  );
}
