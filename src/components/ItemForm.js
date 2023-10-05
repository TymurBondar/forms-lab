import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({newProductName, newProductCategory, addNewProuctName, addNewProductCategory, onItemFormSubmit}) {
  return (
    <form onSubmit={onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={addNewProuctName} type="text" name="name" value={newProductName}/>
      </label>

      <label>
        Category:
        <select onChange={addNewProductCategory} name="category" value={newProductCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
