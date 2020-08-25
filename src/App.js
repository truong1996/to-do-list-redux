import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/taskForm";
import FormSearch from "./components/formSearch";
import TaskList from "./components/taskList";

function App() {
  const task = [];

  const [isDispplay, setIsDisplay] = useState(false);
  const [taskItem, setTaskItem] = useState(task);

  const toggleDisplay = () => {
    setIsDisplay(!isDispplay);
  };
  const classNameTaskForm = isDispplay
    ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
    : "";
  const classNameTaskList = isDispplay
    ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
    : "col-xs-12 col-sm-12 col-md-12 col-lg-12";

  const handleSumbitFormTask = (dataTask) => {
    const tasks = [...taskItem];
    for (let i = 0; i <= tasks.length; i++) {
      dataTask.id = i + 1;
    }
    tasks.push(dataTask);
    setTaskItem(tasks);
  };

  const onDeleteTaskItem = (taskId) => {
    const tasks = [...taskItem];
    let indexTask = findIndex(taskId);
    if (indexTask !== -1) {
      tasks.splice(indexTask, 1);
    }
    setTaskItem(tasks);
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

  // useEffect(() => {
  //   const tasks = [...taskItem];
  //   const filter = filterTask;
  //   if (filter.filterName) {
  //     const result = tasks.filter((item) => {
  //       return (
  //         item.name.toLowerCase().indexOf(filter.filterName.toLowerCase()) !==
  //         -1
  //       );
  //     });
  //     setTaskItem(result);
  //   }
  //   console.log(taskItem);
  // }, [filterTask]);

  return (
    <div className="App">
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={classNameTaskForm}>
            {isDispplay ? <TaskForm getDataTask={handleSumbitFormTask} /> : ""}
          </div>
          <div className={classNameTaskList}>
            <button
              type="button"
              className="btn btn-primary mb-2 ml-0"
              style={{ display: "block", marginBottom: "20px" }}
              onClick={toggleDisplay}
            >
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            <div className="row mt-1">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <FormSearch />
              </div>
            </div>
            <div className="row mt-15" style={{ marginTop: "15px" }}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks={taskItem} onDelete={onDeleteTaskItem} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
