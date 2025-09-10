import React, { useState } from "react";
import ShoppingList from "./ShoppingList";   // ✅ correct relative path
import itemData from "../data/items";        // ✅ go up one level to /data

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleToggleMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleMode}>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
