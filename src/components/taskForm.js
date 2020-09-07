import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

const TaskForm = (props) => {
  const sendCreateTask = {
    id: "",
    name: "",
    status: "0",
  };

  const [newTask, setNewTask] = useState(sendCreateTask);

  const handleChangeTxt = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setNewTask({ ...newTask, [name]: value });
  };

  useEffect(() => {
    if (props.itemEditing && props.itemEditing !== null) {
      setNewTask(props.itemEditing);
    } else {
      setNewTask({
        name: "",
        status: "0",
      });
    }
  }, [props.itemEditing]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.onAddTasks(newTask);
    props.onCloseForm();
    event.target.reset();
  };

  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">
          {props.itemEditing.id !== ""
            ? "Cập nhập Công việc"
            : "Thêm công việc mới"}
        </h3>
      </div>
      <div className="panel-body">
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label>Tên :</label>
            <input
              required={true}
              type="text"
              className="form-control"
              name="name"
              onChange={handleChangeTxt}
              value={newTask.name}
            />
          </div>
          <label>Trạng Thái :</label>
          <select
            className="form-control"
            required="required"
            name="status"
            onChange={handleChangeTxt}
            value={newTask.status}
          >
            <option value="0">Chưa kích hoạt</option>
            <option value="1">Kích Hoạt</option>
          </select>
          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-warning">
              {props.itemEditing ? "Lưu" : "Thêm"}
            </button>
            &nbsp;
            <button type="button" className="btn btn-danger">
              Hủy Bỏ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itemEditing: state.editTask,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTasks: (tasks) => {
      dispatch(actions.addTask(tasks));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
