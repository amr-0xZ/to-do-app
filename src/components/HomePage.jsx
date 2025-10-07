import React, { useEffect, useState } from "react";
import TasksContext from "../contexts/TasksContext";
import TasksViewer from "./TasksViewer";
import AddForm from "./AddForm";
import AppContainer from "./AppContainer";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  //read local storage tasks
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    return savedTasks || [];
  });

  //save tasks to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <AppContainer>
        <Header />
        <AddForm />
        <TasksViewer />
      </AppContainer>
      <ToastContainer autoClose={2000} />
    </TasksContext.Provider>
  );
};

export default HomePage;
