import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="p-6 md:p-24">
        <h1 className="text-4xl text-gray-600 font-bold">TO-DO List</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
