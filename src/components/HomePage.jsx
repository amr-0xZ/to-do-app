import React, { useEffect, useState } from "react";
import TasksContext from "../contexts/TasksContext";
import TasksViewer from "./TasksViewer";
import AddForm from "./AddForm";
import AppContainer from "./AppContainer";
import Header from "./Header";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  // //save in local storage if the lists changed
  // const saveTasks = (tasks) => {
  //   window.localStorage.setItem("tasks", JSON.stringify(tasks));
  // };

  // //add new task
  // const addTask = (txt) => {
  //   const newTask = {
  //     id: Date.now(),
  //     text: txt,
  //     done: false,
  //     completeDate: null,
  //   };
  //   setTasks([...tasks, newTask]);
  //   console.log("one task added", tasks);
  // };

  // //complete task
  // const completeTask = (id) => {
  //   const task = tasks.filter((t) => {
  //     t.id === id;
  //   });
  //   if (task) {
  //     task.done = !task.done;
  //     task.completeDate = task.done ? new Date().toISOString() : null;
  //     deleteTask(task.id);
  //     setTasks([...tasks, task]);
  //     console.log("one task completed", tasks);
  //   }
  // };

  // //edit task
  // const editTask = (id, txt) => {
  //   const task = tasks.find((t) => t.id === id);
  //   if (task) {
  //     task.text = txt;
  //     deleteTask(task.id);
  //     setTasks([...tasks, task]);
  //   }
  // };

  // const deleteTask = (id) => {
  //   setTasks(
  //     tasks.filter((task) => {
  //       task.id !== id;
  //     })
  //   );
  // };

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <AppContainer>
        <Header />
        <AddForm />
        {/* <TasksViewer /> */}
      </AppContainer>
    </TasksContext.Provider>
  );
};

export default HomePage;
