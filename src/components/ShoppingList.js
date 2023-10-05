import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [nameFilter, setNameFilter] = useState("");
  const [newProductName, setNewProductName] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("Produce");
  const [itemsArray, setItemsArray] = useState(items);


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleTextFilter(event){
    setNameFilter(event.target.value);
  }

  function addNewProductName(event){
    setNewProductName(event.target.value)
  }

  function addNewProductCategory(event){
    setNewProductCategory(event.target.value)
  }

  function onItemFormSubmit(event){
    event.preventDefault();
    const newItem = {
      id: itemsArray.length + 1,
      name: newProductName,
      category: newProductCategory
    }
    setItemsArray([...itemsArray, newItem]);
  }

  const itemsToDisplay = itemsArray.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesName = nameFilter === "" || item.name.toLowerCase().includes(nameFilter.toLowerCase());
    
    return matchesCategory && matchesName;
});


  return (
    <div className="ShoppingList">
      <ItemForm newProductName={newProductName} newProductCategory={newProductCategory}
      addNewProductCategory={addNewProductCategory}
      addNewProuctName={addNewProductName}
      onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} handleTextFilter={handleTextFilter} search={nameFilter} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
