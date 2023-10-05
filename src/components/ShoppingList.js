import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [nameFilter, setNameFilter] = useState("");


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleTextFilter(event){
    const newValue = event.target.value;
    setNameFilter(newValue);
    console.log(newValue);
  }

  const itemsToDisplay = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesName = nameFilter === "" || item.name.toLowerCase().includes(nameFilter.toLowerCase());
    
    return matchesCategory && matchesName;
});


  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} handleTextFilter={handleTextFilter} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
