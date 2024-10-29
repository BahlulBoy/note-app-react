import { Component } from "react";
import PropTypes from "prop-types";

import "./CreateNoteForm.css";

class CreateNoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limit: 0,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitClickHandler = this.onSubmitClickHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    if (event.target.value.length <= 50) {
      this.setState(() => {
        return { title: event.target.value, limit: event.target.value.length };
      });
    }
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return { body: event.target.value };
    });
  }

  isNotEmpty(text) {
    return text.trim().length > 0;
  }

  onSubmitClickHandler(event) {
    event.preventDefault();

    if (this.isNotEmpty(this.state.title) && this.isNotEmpty(this.state.body)) {
      this.props.onSubmitHandler(this.state.title, this.state.body);
      this.setState(() => {
        return {
          title: "",
          body: "",
          limit: 0,
        };
      });
    }
  }

  render() {
    return (
      <form action="" method="get" id="create-note">
        <h5>Create Note</h5>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Insert title"
          required
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
        />
        <p>{this.state.limit}/50</p>
        <textarea
          name="body"
          id="body"
          rows="4"
          placeholder="Insert note"
          value={this.state.body}
          onChange={this.onBodyChangeHandler}
          required
        ></textarea>
        <button type="submit" onClick={this.onSubmitClickHandler}>
          Create
        </button>
      </form>
    );
  }
}

CreateNoteForm.propTypes = {
  onSubmitHandler: PropTypes.func,
};

export default CreateNoteForm;
