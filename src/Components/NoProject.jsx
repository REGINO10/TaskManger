import noProjectImg from "../assets/no-projects.png";
import { createPortal } from "react-dom";

export default function NoProject() {
  return createPortal(
    <section className="no-project">
      <div className="no-project-image-container">
        <img src={noProjectImg} />
      </div>
      <h1>No Project Selected</h1>
      <p>Select a project or get started with a new one</p>
      <button className="no-project-cta">Create new project</button>
    </section>,
    document.getElementById("modal-root")
  );
}
