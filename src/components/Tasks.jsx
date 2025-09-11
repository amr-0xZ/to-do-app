import React, { useState, useEffect } from "react";
import EmptyActive from "./EmptyActive";
import ActiveList from "./ActiveList";

const Tasks = () => {
  // const [view, setView] = useState(<ActiveList atasks={tasks} edit={edit} del={del} complete={complete} />)

  return (
    <>
      <EmptyActive />
    </>
  );
};

export default Tasks;
