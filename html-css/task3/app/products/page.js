"use client";

import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="flex items-center gap-2 py-4 w-3/6">
        <input
          type="text"
          className="p-2 border border-gray-400 rounded w-full"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500"
        >
          Add
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 w-3/6 border border-gray-300">
        <div className="text-3xl font-bold text-gray-800 pb-3 border-b-2 border-red-300">
          To-do List
        </div>
        <div className="flex items-center border-b border-gray-300 p-5"> </div>
        <div className="space-y-2">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center border-b border-gray-300 p-2"
            >
              <button
                onClick={() => toggleTask(index)}
                className={`w-5 h-5 border-2 border-gray-600 rounded-full flex items-center justify-center ${
                  task.completed ? "bg-red-400" : "bg-white"
                }`}
              ></button>
              <span
                className={`ml-3 text-lg font-medium font-reenie ${
                  task.completed
                    ? "line-through text-gray-500"
                    : "text-gray-800"
                }`}
              >
                {task.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
