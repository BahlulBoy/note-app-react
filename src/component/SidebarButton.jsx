import PropTypes from "prop-types";

function SidebarButton({ btnOnClick, status, children }) {
  const classNameValue = status ? "active-btn" : "";
  return (
    <button onClick={() => btnOnClick()} className={classNameValue}>
      {children}
    </button>
  );
}

SidebarButton.propTypes = {
  btnOnClick: PropTypes.func,
  status: PropTypes.bool,
  children: PropTypes.string,
};

export default SidebarButton;
