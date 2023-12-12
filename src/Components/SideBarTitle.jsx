export default function SideBarTitle({ data, listHandle, projectList }) {
  const sidebarListClickHandler = (list) => {
    listHandle(data, list);
  };

  return (
    <span
      className="sidebar-list"
      onClick={sidebarListClickHandler.bind(undefined, projectList)}
    >
      {data.title}
    </span>
  );
}
