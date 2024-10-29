import Sidebar from "./component/Sidebar";
import ContentNote from "./component/ContentNote";
import { getInitialData } from "./utils";
import CreateNoteForm from "./component/CreateNoteForm";
import SearchNoteForm from "./component/SearchNoteForm";

import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isArchivedPage: false,
      notes: getInitialData(),
      itemView: getInitialData().filter((data) => data.archived == false),
      search: "",
    };

    this.onSidebarClickEventHandler =
      this.onSidebarClickEventHandler.bind(this);
    this.onNoteCreated = this.onNoteCreated.bind(this);
    this.onItemDelete = this.onItemDelete.bind(this);
    this.searchIndexItem = this.searchIndexItem.bind(this);
    this.onItemArchive = this.onItemArchive.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    this.onSearchSubmitEventHandler =
      this.onSearchSubmitEventHandler.bind(this);
  }

  onSearchSubmitEventHandler(event) {
    event.preventDefault();
    var listSearchedFilter = this.state.notes.filter(
      (data) =>
        this.searchValueMatch(this.state.search, data.title) &&
        data.archived === this.state.isArchivedPage
    );
    this.setState(() => {
      return {
        itemView: listSearchedFilter,
      };
    });
  }

  onSearchChangeHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  searchValueMatch(search, value) {
    const regex = new RegExp(search, "i");
    return regex.test(value);
  }

  onSidebarClickEventHandler(status) {
    var listItemFiltered = this.state.notes.filter(
      (data) => data.archived == status
    );
    if (this.state.search.length > 0) {
      listItemFiltered = listItemFiltered.filter((data) =>
        this.searchValueMatch(this.state.search, data.title)
      );
    }
    this.setState(() => {
      return {
        isArchivedPage: status,
        itemView: listItemFiltered,
      };
    });
  }

  searchIndexItem(id) {
    for (const index in this.state.notes) {
      if (this.state.notes[index].id === id) {
        return index;
      }
    }
    return -1;
  }

  onItemDelete(id) {
    const index = this.searchIndexItem(id);
    var tempList = this.state.notes;
    if (index > -1) {
      tempList.splice(index, 1);
    }
    this.setState((previousState) => {
      return {
        notes: tempList,
        itemView: tempList.filter(
          (data) => data.archived == previousState.isArchivedPage
        ),
      };
    });
  }

  onItemArchive(id) {
    const index = this.searchIndexItem(id);
    const tempValue = this.state.notes[index].archived;
    const tempList = this.state.notes;
    tempList[index].archived = !tempValue;
    this.setState((previousState) => {
      return {
        notes: tempList,
        itemView: tempList.filter(
          (data) => data.archived == previousState.isArchivedPage
        ),
      };
    });
  }

  onNoteCreated(title, body) {
    const tempValue = {
      id: new Date().getTime(),
      title: title,
      body: body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    var tempList = this.state.notes;
    tempList.push(tempValue);
    this.setState(() => {
      return {
        notes: tempList,
      };
    });
    this.onSidebarClickEventHandler(this.state.isArchivedPage);
  }

  render() {
    return (
      <>
        <Sidebar
          isArchived={this.state.isArchivedPage}
          onSidebarBtnClick={this.onSidebarClickEventHandler}
        />
        <section>
          <div className="header-content">
            <h2>{this.state.isArchivedPage ? "Archive notes" : "Notes"}</h2>
            <SearchNoteForm
              search={this.state.search}
              onSearchChangeHandler={this.onSearchChangeHandler}
              onSearchSubmitEventHandler={this.onSearchSubmitEventHandler}
            />
          </div>
          <ContentNote
            listData={this.state.itemView}
            onDelete={this.onItemDelete}
            onArchived={this.onItemArchive}
          />
          <CreateNoteForm
            onSubmitHandler={(title, body) => this.onNoteCreated(title, body)}
          />
        </section>
      </>
    );
  }
}

export default App;
