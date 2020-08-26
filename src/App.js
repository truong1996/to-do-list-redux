import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/taskForm";
import TaskList from "./components/taskList";
import TaskSortControl from "./components/taskSortControl";

function App() {
  const [isDispplay, setIsDisplay] = useState(false);
  const [taskItem, setTaskItem] = useState([]);
  const [filterTaskName, setFilterTaskName] = useState("");
  const [filterTaskStatus, setFilterTaskStatus] = useState("-1");
  const [itemEdit, setItemEdit] = useState(null);
  const [sortItem, setSortItem] = useState({});

  const toggleDisplay = () => {
    setIsDisplay(!isDispplay);
    setItemEdit(null);
  };
  const classNameTaskForm = isDispplay
    ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
    : "";
  const classNameTaskList = isDispplay
    ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
    : "col-xs-12 col-sm-12 col-md-12 col-lg-12";

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks && tasks.length > 0) {
      setTaskItem(JSON.parse(tasks));
    }
  }, []);

  const handleSumbitFormTask = (dataTask) => {
    const tasks = [...taskItem];
    console.log(dataTask.id);
    if (dataTask.id === undefined) {
      for (let i = 0; i <= tasks.length; i++) {
        dataTask.id = i + 1;
      }
      tasks.push(dataTask);
    } else {
      const index = findIndex(dataTask.id);
      tasks[index] = dataTask;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTaskItem(tasks);
    toggleDisplay();
  };

  const onDeleteTaskItem = (taskId) => {
    const tasks = [...taskItem];
    let indexTask = findIndex(taskId);
    if (indexTask !== -1) {
      tasks.splice(indexTask, 1);
    }
    setTaskItem(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const findIndex = (id) => {
    const task = [...taskItem];
    let result = -1;
    task.forEach(function (item, index) {
      if (item.id === id) {
        result = index;
      }
    });
    return result;
  };

  const onFilterTaskItem = (filterName, filterStatus) => {
    setFilterTaskName(filterName);
    setFilterTaskStatus(filterStatus);
  };
  const onEditTask = (task) => {
    setItemEdit({ ...task });
    setIsDisplay(true);
  };
  const onSortTaskItem = (sortName, sortvalue) => {
    setSortItem({ ...sortItem, sortName: sortName, sortValue: sortvalue });
  };
  const filterTask = taskItem.filter((task) => {
    if (filterTaskName) {
      if (filterTaskStatus === "1") {
        return (
          task.name.toLowerCase().indexOf(filterTaskName.toLowerCase()) !==
            -1 && task.status === "1"
        );
      }
      if (filterTaskStatus === "0") {
        return (
          task.name.toLowerCase().indexOf(filterTaskName.toLowerCase()) !==
            -1 && task.status === "0"
        );
      }
      return (
        task.name.toLowerCase().indexOf(filterTaskName.toLowerCase()) !== -1
        //return tasks.name.toLowerCase().includes(filterTaskName.toLowerCase());
      );
    }
    if (filterTaskStatus === "-1") {
      return task;
    } else {
      return task.status === (filterTaskStatus === "1" ? "1" : "0");
    }
  });

  if (sortItem.sortName === "name") {
    filterTask.sort((a, b) => {
      var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
      var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
      if (nameA > nameB) {
        return sortItem.sortValue;
      }
      if (nameA < nameB) {
        return -sortItem.sortValue;
      }
      return 0;
    });
  }

  if (sortItem.sortName === "status") {
    filterTask.sort((a, b) => {
      if (a.status > b.status) {
        return -sortItem.sortValue;
      }
      if (a.status < b.status) {
        return sortItem.sortValue;
      }
      return 0;
    });
  }

  return (
    <div className="App">
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={classNameTaskForm}>
            {isDispplay ? (
              <TaskForm
                getDataTask={handleSumbitFormTask}
                itemEditing={itemEdit}
              />
            ) : (
              ""
            )}
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
                <TaskSortControl onSort={onSortTaskItem} value={sortItem} />
              </div>
            </div>
            <div className="row mt-15" style={{ marginTop: "15px" }}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  tasks={filterTask}
                  onDelete={onDeleteTaskItem}
                  onFilter={onFilterTaskItem}
                  onEdit={onEditTask}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
