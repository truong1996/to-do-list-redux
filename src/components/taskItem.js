import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

const TaskItem = (props) => {
  const onDelete = () => {
    props.onDeleteTask(props.task.id);
  };

  const onSeletecItemEdit = () => {
    props.onEditTask(props.task);
    props.onOpenForm();
  };

  return (
    <tr>
      <td>{props.id + 1}</td>
      <td>{props.task.name}</td>
      <td className="text-center">
        {props.task.status === "1" ? (
          <span className="label label-success">Kích Hoạt</span>
        ) : (
          <span className="label label-danger">Chưa Kích Hoạt</span>
        )}
      </td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-warning"
          onClick={onSeletecItemEdit}
        >
          <span className="fa fa-pencil mr-5"></span> Sửa
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger" onClick={onDelete}>
          <span className="fa fa-trash mr-5"></span> Xóa
        </button>
      </td>
    </tr>
  );
};

const mapStatetoProp = (state) => {
  return {
    isDisplaying: state.toggleForm,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteTask: (taskID) => {
      dispatch(actions.delTask(taskID));
    },
    onEditTask: (task) => {
      dispatch(actions.editTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
  };
};

export default connect(mapStatetoProp, mapDispatchToProps)(TaskItem);
