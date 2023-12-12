import { useRef, forwardRef, useImperativeHandle } from "react";

const AddProject = forwardRef(({ cancelButton }, ref) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const saveProject = (e) => {
    e.preventDefault();

    if (
      [
        title.current.value,
        description.current.value,
        dueDate.current.value,
      ].every((value) => value !== "")
    ) {
      cancelButton();
    }
  };

  useImperativeHandle(ref, () => {
    return {
      latestProject: () => {
        return {
          title: title.current.value,
          description: description.current.value,
          dueDate: dueDate.current.value,
        };
      },
    };
  });

  return (
    <form className="add-project-form">
      <span className="button-section">
        <button className="add-project-cancel" onClick={cancelButton.bind()}>
          Cancel
        </button>
        <button className="add-project-save" onClick={saveProject}>
          Save
        </button>
      </span>
      <label>TITLE</label>
      <input className="title" ref={title} />
      <label>DESCRIPTION</label>
      <textarea className="description" ref={description}></textarea>
      <label>DUE DATE</label>
      <input type="date" className="due-date" ref={dueDate} />
    </form>
  );
});

export default AddProject;
