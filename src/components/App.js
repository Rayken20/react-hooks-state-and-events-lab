import React, { useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [appProp,setAppClass]=useState(false)

  function handleClickDarkMode(){
    setAppClass(!appProp)
   }

  return (
    <div className={appProp ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClickDarkMode} >{appProp ? "Dark" : "Light"}Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;