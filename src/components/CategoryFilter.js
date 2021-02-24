import React from "react";

function CategoryFilter({category, categories, onCategoryClick}) {

  // function handleClicks(cat) {
  //   console.log(cat)

  //   categories.filter(category => (
  //     category === cat
  //   ))
  // }

  const categoryDisplay = categories.map(cat => (
    <button 
    key={cat} 
    className={category === cat ? "selected" : ""}
    onClick={() => onCategoryClick(cat)}>
      {cat}
    </button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryDisplay}
    </div>
  );
}

export default CategoryFilter;
