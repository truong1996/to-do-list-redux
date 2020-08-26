import React, { useState } from "react";
import TaskItem from "../components/taskItem";

const TaskList = (props) => {
  const [filterTask, setFilterTask] = useState({
    filterName: "",
    filterStatus: "-1",
  });
  const onDeleteTaskItem = (taskID) => {
    props.onDelete(taskID);
  };

  const onEditTaskItem = (task) => {
    props.onEdit(task);
  };

  const setDataFilterTask = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    props.onFilter(
      name === "filterName" ? value : filterTask.filterName,
      name === "filterStatus" ? value : filterTask.filterStatus
    );
    setFilterTask({ ...filterTask, [name]: value });
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
              value={filterTask.filterName}
            />
          </td>
          <td>
            <select
              className="form-control"
              onChange={setDataFilterTask}
              name="filterStatus"
            >
              <option value={-1}>Tất Cả</option>
              <option value={0}>Ẩn</option>
              <option value={1}>Kích Hoạt</option>
            </select>
          </td>
          <td></td>
        </tr>
        {props.tasks.map((value, index) => {
          return (
            <TaskItem
              key={index}
              task={value}
              onDeleteApp={onDeleteTaskItem}
              onEditItem={onEditTaskItem}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default TaskList;
