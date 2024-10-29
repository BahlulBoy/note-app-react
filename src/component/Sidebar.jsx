import PropTypes from "prop-types";
import SidebarButton from "./SidebarButton";
import "./Sidebar.css";

function Sidebar({ isArchived, onSidebarBtnClick }) {
  return (
    <div className="sidebar">
      <h1>My Notes</h1>
      <div className="sidebar-content">
        <SidebarButton
          btnOnClick={() => {
            onSidebarBtnClick(false);
          }}
          status={!isArchived}
        >
          Notes
        </SidebarButton>
        <SidebarButton
          btnOnClick={() => {
            onSidebarBtnClick(true);
          }}
          status={isArchived}
        >
          Archived
        </SidebarButton>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  isArchived: PropTypes.bool,
  onSidebarBtnClick: PropTypes.func,
};

export default Sidebar;
