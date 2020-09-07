import React, { useState } from "react";
import { connect } from "react-redux";
import TaskItem from "../components/taskItem";
import * as actions from "../actions/index";

const TaskList = (props) => {
  const [filterTask, setFilterTask] = useState({
    filterName: "",
    filterStatus: "-1",
  });

  const onEditTaskItem = (task) => {
    props.onEdit(task);
  };

  const setDataFilterTask = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const filter = {
      name: name === "filterName" ? value : filterTask.filterName,
      status: name === "filterStatus" ? value : filterTask.filterStatus,
    };
    props.onChangeFilter(filter);
    setFilterTask({ ...filterTask, [name]: value });
  };

  let { tasks, sortTask } = props;
  if (props.filterTask.name !== undefined && props.filterTask.name) {
    tasks = tasks.filter((task) => {
      return (
        task.name.toLowerCase().indexOf(props.filterTask.name.toLowerCase()) !==
        -1
      );
    });
  }
  if (props.filterTask.status) {
    tasks = tasks.filter((task) => {
      if (props.filterTask.status === "-1") {
        return task;
      } else {
        return task.status === (props.filterTask.status === "0" ? "0" : "1");
      }
    });
  }
  console.log(sortTask);
  if (sortTask.sortBy === "name") {
    tasks.sort((a, b) => {
      var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
      var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
      if (nameA > nameB) {
        return sortTask.sortValue;
      }
      if (nameA < nameB) {
        return -sortTask.sortValue;
      }
      return 0;
    });
  }

  if (sortTask.sortBy === "status") {
    tasks.sort((a, b) => {
      if (a.status > b.status) {
        return -sortTask.sortValue;
      }
      if (a.status < b.status) {
        return sortTask.sortValue;
      }
      return 0;
    });
  }

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
        {tasks.map((value, index) => {
          return (
            <TaskItem
              key={index}
              task={value}
              id={index}
              onEditItem={onEditTaskItem}
            />
          );
        })}
      </tbody>
    </table>
  );
};

const mapStatetoProps = (state) => {
  return {
    tasks: state.tasks,
    filterTask: state.filterTask,
    sortTask: state.sortTask,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onChangeFilter: (filter) => {
      dispatch(actions.filterTable(filter));
    },
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(TaskList);
