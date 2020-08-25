import React, { useState } from "react";

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

  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">Thêm Công Việc</h3>
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
            />
          </div>
          <label>Trạng Thái :</label>
          <select
            className="form-control"
            required="required"
            name="status"
            onChange={handleChangeTxt}
          >
            <option value="0">--Selecte--</option>
            <option value="1">Kích Hoạt</option>
            <option value="0">Ẩn</option>
          </select>
          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-warning">
              Thêm
            </button>
            &nbsp;
            <button type="submit" className="btn btn-danger">
              Hủy Bỏ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
