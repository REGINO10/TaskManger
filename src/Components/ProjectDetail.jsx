import Task from "./Task";
import { useRef, useState } from "react";

export default function ProjectDetail({ data, allWorkout, clearProject }) {
  const [task, setTask] = useState();

  const [selectedWorkout] = allWorkout.filter(
    (obj) => obj.unique === data.unique
  );

  const newTask = useRef();

  const deleteTask = (updatedWorkout) => {
    setTask({ ...updatedWorkout });
  };

  const addTask = () => {
    if (newTask.current.querySelector("input").value !== "") {
      selectedWorkout.task.unshift(
        newTask.current.querySelector("input").value
      );
      newTask.current.querySelector("input").value = "";
      setTask({ ...selectedWorkout });
    } else {
      newTask.current.querySelector("input").value === "";
    }
  };

  const handleProjectDelete = (e) => {
    e.preventDefault();

    const index = allWorkout.findIndex(
      (wokout) => selectedWorkout.unique === wokout.unique
    );

    allWorkout.splice(index, 1);
    clearProject(allWorkout);
  };

  const formatDate = (date) => {
    const dateObject = new Date(date);

    const formattedDate = dateObject.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return formattedDate;
  };

  return (
    <section className="project-detail">
      <div className="detail-one">
        <span className="detail-one-title">
          <h1>{selectedWorkout.title}</h1>
          <button onClick={handleProjectDelete}>Delete</button>
        </span>
        <span className="detail-date">
          {formatDate(selectedWorkout.dueDate)}
        </span>
        <p>{selectedWorkout.description}</p>
      </div>
      <div className="detail-two">
        <h1>Tasks</h1>
        <span className="task-add" ref={newTask}>
          <input />
          <button onClick={addTask}>Add Task</button>
        </span>
        <span className="task">
          {selectedWorkout.task.map((task, index) => {
            return (
              <Task
                key={index}
                task={task}
                index={index}
                selectedWorkout={selectedWorkout}
                taskDelete={deleteTask}
              />
            );
          })}
        </span>
      </div>
    </section>
  );
}
