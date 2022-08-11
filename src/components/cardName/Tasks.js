import "../../commons/index.css";
import Task from "./Task";

const List = ({ tasks, onDelete, onEdit }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </>
  );
};

export default List;
