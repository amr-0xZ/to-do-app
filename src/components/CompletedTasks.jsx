import React, { useState, useEffect, useContext } from "react";
import TasksContext from "../contexts/TasksContext";
import EmptyCompleted from "./EmptyCompleted";
import CompletedList from "./CompletedList";

const CompletedTasks = () => {
  const tasksState = useContext(TasksContext);
  const [view, setView] = useState(<EmptyCompleted />);

  useEffect(() => {
    const completed = tasksState.tasks.filter((task) => task.done);
    if (completed.length == 0) {
      setView(<EmptyCompleted />);
    } else {
      setView(<CompletedList />);
    }
  }, [tasksState.tasks]);

  return <>{view}</>;
};

export default CompletedTasks;
