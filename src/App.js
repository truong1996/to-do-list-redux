import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/taskForm";
import TaskList from "./components/taskList";
import TaskSortControl from "./components/taskSortControl";
import { connect } from "react-redux";
import * as actions from "./actions/index";

function App(props) {
  const toggleDisplay = () => {
    const clearTask = {
      id: "",
      name: "",
      status: "0",
    };
    if (props.itemEditing && props.itemEditing.id !== "") {
      props.onOpenForm();
    } else {
      props.onToggleTask();
    }
    props.onClearForm(clearTask);
  };
  const classNameTaskForm = props.isDispplay
    ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
    : "";
  const classNameTaskList = props.isDispplay
    ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
    : "col-xs-12 col-sm-12 col-md-12 col-lg-12";

  return (
    <div className="App">
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={classNameTaskForm}>
            {props.isDispplay ? <TaskForm /> : ""}
          </div>
          <div className={classNameTaskList}>
            <div className="row mt-1">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 btn__control">
                <button
                  type="button"
                  className="btn btn-primary mb-2 ml-0"
                  style={{ display: "block", marginBottom: "20px" }}
                  onClick={toggleDisplay}
                >
                  <span className="fa fa-plus mr-5"></span> Thêm Công Việc
                </button>
                <TaskSortControl />
              </div>
            </div>
            <div className="row mt-15" style={{ marginTop: "15px" }}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isDispplay: state.toggleForm,
    itemEditing: state.editTask,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleTask: () => {
      dispatch(actions.toggleForm());
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onClearForm: (tasks) => {
      dispatch(actions.editTask(tasks));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
