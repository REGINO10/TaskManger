import Button from "./Button";
import SideBarTitle from "./SideBarTitle";

export default function Sidebar({ addProject, projectList, listHandle }) {
  return (
    <aside>
      <h1>YOUR PROJECTS</h1>
      <Button addProject={addProject} />
      {projectList.length > 0
        ? projectList.map((data, index) => {
            return (
              <SideBarTitle
                key={index}
                data={data}
                listHandle={listHandle}
                projectList={projectList}
              />
            );
          })
        : undefined}
    </aside>
  );
}
