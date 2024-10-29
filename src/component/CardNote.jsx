import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

function CardNote({ id, title, body, date, isArchived, onArchived, onDelete }) {
  const dateString = showFormattedDate(date);
  return (
    <div className="card-note" key={id}>
      <div className="content">
        <h3>{title}</h3>
        <h5>{dateString}</h5>
        <p>{body}</p>
      </div>
      <div className="card-note-btn">
        <button onClick={() => onDelete(id)}>
          <i className="bi bi-trash"></i>
        </button>
        <button onClick={() => onArchived(id)}>
          <i
            className={isArchived ? "bi bi-archive-fill" : "bi bi-archive"}
          ></i>
        </button>
      </div>
    </div>
  );
}

CardNote.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  isArchived: PropTypes.bool,
  onArchived: PropTypes.func,
  onDelete: PropTypes.func,
};

export default CardNote;
