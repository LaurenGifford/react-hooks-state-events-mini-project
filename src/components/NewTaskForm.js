import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  // const [newTask, setNewTask] = useState({
  //   text: "description",
  //   category: "category"
  // })

  const [text, setText] = useState("text")
  const [category, setCategory] = useState("")

  const renderCategories = categories.filter(cat => (
    cat !== "All"
  ))
  .map(cat => (
    <option>
      {cat}
    </option>
  ))

  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit({text, category})
  }


  return (
    <form onSubmit={(e) => handleSubmit(e)} className="new-task-form">
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category" 
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          {renderCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
