import React from "react";
import TaskItem from "../components/taskItem";

const TaskList = (props) => {
  const onDeleteTaskItem = (taskID) => {
    props.onDelete(taskID);
  };

  const setDataFilterTask = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const filterTask = {
      [name]: value,
    };
    props.onFilter(filterTask);
  };

  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th className="text-center">STT</th>
          <th className="text-center">Tên</th>
          <th className="text-center">Trạng Thái</th>
          <th className="text-center">Hành Động</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>
            <input
              type="text"
              className="form-control"
              onChange={setDataFilterTask}
              name="filterName"
            />
          </td>
          <td>
            <select
              className="form-control"
              onChange={setDataFilterTask}
              name="filterStatus"
            >
              <option value="-1">Tất Cả</option>
              <option value="0">Ẩn</option>
              <option value="1">Kích Hoạt</option>
            </select>
          </td>
          <td></td>
        </tr>
        {props.tasks.map((value, index) => {
          return (
            <TaskItem key={index} task={value} onDeleteApp={onDeleteTaskItem} />
          );
        })}
      </tbody>
    </table>
  );
};
export default TaskList;
