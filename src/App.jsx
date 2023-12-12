import { useState, useRef } from "react";
import Sidebar from "./Components/Sidebar";
import NoProject from "./Components/NoProject";
import AddProject from "./Components/AddProject";
import ProjectDetail from "./Components/ProjectDetail";

import cloneDeep from "lodash/cloneDeep";

function App() {
  const [noProject, setNoProject] = useState(true);
  const [currentWorkoutList, setCurrentWorkoutList] = useState([]);
  const [projectDetail, setProjectDetail] = useState(false);

  const copyWorkoutList = cloneDeep(currentWorkoutList);

  const newAddedProject = useRef();
  const detailedProject = useRef();

  const clearProject = (project) => {
    setCurrentWorkoutList((old) => project);
    setNoProject((old) => true);
    setProjectDetail((old) => false);
  };

  const addProjectHandle = () => {
    if (newAddedProject.current?.latestProject) {
      if (
        Object.values(newAddedProject.current.latestProject()).every(
          (value) => value !== ""
        )
      ) {
        const last = newAddedProject.current.latestProject();
        last.task = [];
        copyWorkoutList.unshift(last);

        const uniqueWorkoutList = copyWorkoutList.map((data, index) => {
          data.unique = index;
          return data;
        });

        setCurrentWorkoutList((old) => uniqueWorkoutList);
      }
    }
    if (projectDetail === false) {
      setNoProject((oldState) => !oldState);
    }
    if (projectDetail === true) {
      setProjectDetail((old) => false);
      setCurrentWorkoutList((old) => copyWorkoutList);
    }
  };

  const displayProject = (data, list) => {
    detailedProject.current = data;

    if (noProject === true) {
      setNoProject((old) => false);
    }
    if (projectDetail === false) {
      setProjectDetail((old) => true);
    }

    setCurrentWorkoutList(list);
  };

  return (
    <>
      {noProject ? <NoProject /> : undefined}
      <Sidebar
        addProject={addProjectHandle}
        projectList={copyWorkoutList}
        listHandle={displayProject}
      />
      {!noProject && !projectDetail ? (
        <AddProject ref={newAddedProject} cancelButton={addProjectHandle} />
      ) : undefined}
      {!noProject && projectDetail ? (
        <ProjectDetail
          data={detailedProject.current}
          allWorkout={copyWorkoutList}
          clearProject={clearProject}
        />
      ) : undefined}
    </>
  );
}

export default App;
