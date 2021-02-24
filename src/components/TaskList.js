import React, {useState} from "react";
import Task from "./Task"

function TaskList({category, tasks}) {
  const [deleteTask, setDeleteTask] = useState("")

  function handleRemoveItem(item) {
    setDeleteTask(item)
  }

  const displayTasks = tasks.filter((task) => {
    if (category === "All") {return true}
    return task.category === category 
  }).filter(task => (
    task.text !== deleteTask
  ))
  .map((task, index) => (
    <Task 
    key={index}
    id={task.text}
    text={task.text}
    category={task.category}
    onDeleteClick={handleRemoveItem}
    />
  ))


  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
