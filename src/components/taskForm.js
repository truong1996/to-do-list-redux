import React, { useState, useEffect } from "react";

const TaskForm = (props) => {
  const sendCreateTask = {};

  const [newTask, setNewTask] = useState(sendCreateTask);

  const handleChangeTxt = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.getDataTask(newTask);
    event.target.reset();
  };

  useEffect(() => {
    if (props.itemEditing && props.itemEditing !== null) {
      setNewTask(props.itemEditing);
    } else {
      setNewTask({});
    }
  }, [props.itemEditing]);

  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">
          {props.itemEditing ? "Cập nhập Công việc" : "Thêm công việc mới"}
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
              value={newTask.name || ""}
            />
          </div>
          <label>Trạng Thái :</label>
          <select
            className="form-control"
            required="required"
            name="status"
            onChange={handleChangeTxt}
            value={newTask.status || ""}
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

export default TaskForm;
