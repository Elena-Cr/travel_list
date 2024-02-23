import { useState } from "react";
import Item from "./item";
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItems,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  //Sorting an array
  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    //sort alphabeticly
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    //sort by true/false
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear the list</button>
      </div>
    </div>
  );
}
