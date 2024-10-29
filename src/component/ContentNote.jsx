import PropTypes from "prop-types";
import CardNote from "./CardNote";

import "./ContentNote.css";

function ContentNote({ listData, onDelete, onArchived }) {
  return (
    <div className="list-notes">
      {listData.map((data) => {
        return (
          <CardNote
            key={data.id}
            id={data.id}
            title={data.title}
            body={data.body}
            date={data.createdAt}
            isArchived={data.archived}
            onDelete={onDelete}
            onArchived={onArchived}
          />
        );
      })}
    </div>
  );
}

ContentNote.propTypes = {
  listData: PropTypes.array,
  onDelete: PropTypes.func,
  onArchived: PropTypes.func,
};

export default ContentNote;
