import React from "react";

const TaskItem = (props) => {
  const onDelete = () => {
    props.onDeleteApp(props.task.id);
  };

  return (
    <tr>
      <td>{props.task.id}</td>
      <td>{props.task.name}</td>
      <td className="text-center">
        {props.task.status === "1" ? (
          <span className="label label-success">Kích Hoạt</span>
        ) : (
          <span className="label label-danger">Chưa Kích Hoạt</span>
        )}
      </td>
      <td className="text-center">
        <button type="button" className="btn btn-warning">
          <span className="fa fa-pencil mr-5"></span>Sửa
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger" onClick={onDelete}>
          <span className="fa fa-trash mr-5"></span>Xóa
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
