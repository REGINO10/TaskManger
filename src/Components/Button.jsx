export default function Button({ addProject }) {
  const handleClick = () => {
    addProject();
  };

  return (
    <button className="add-project-cta" onClick={handleClick}>
      + Add Project
    </button>
  );
}
