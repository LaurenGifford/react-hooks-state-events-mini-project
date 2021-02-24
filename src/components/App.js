import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [currentCats, setCurrentCats] = useState(CATEGORIES)
  const [selectedCat, setSelectedCat] = useState("All")
  const [currentTasks, setCurrentTasks] = useState(TASKS)
  const [newTask, setNewTask] = useState("")

  // const categoryDisplay = currentCats.map(cat => (
  //   <CategoryFilter 
  //   key={cat}
  //   category={cat}
  //   onCategoryClick={handleClicks}
  //   />
  // ))

  function handleClicks(cat) {
    console.log(cat)
    if (cat === "All") {
      setSelectedCat((selectedCat) => "All")
    }
    setSelectedCat((selectedCat) => cat)
  }

  function handleNewTask(task) {
    console.log(newTask)
    setNewTask(task)
    setCurrentTasks(() => [...currentTasks, task])
    console.log(currentTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        category={selectedCat}
        categories={currentCats}
        onCategoryClick={handleClicks}
      />
      <NewTaskForm 
        categories={currentCats}
        onTaskFormSubmit={handleNewTask}
      />
      <TaskList 
        category={selectedCat} 
        tasks={currentTasks}
        newTask={newTask}
      />
    </div>
  );
}

export default App;
