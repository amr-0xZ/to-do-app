import React, { useState, useContext } from "react";
import TasksContext from "../contexts/TasksContext";
import { toast } from "react-toastify";

const EditTask = ({ task, setEdit }) => {
  const tasksState = useContext(TasksContext);
  const [content, setContent] = useState(task.text);

  //hiding the edit frame
  const cancleHandle = () => {
    setEdit();
  };

  const editHandle = () => {
    saveTask(task.id);
    cancleHandle();
    toast.success("Edited one task");
  };

  const saveTask = (id) => {
    const etask = tasksState.tasks.filter((t) => {
      t.id === id;
    });
    if (etask) {
      etask.done = task.done;
      etask.completeDate = task.completeDate;
      etask.text = content;
      etask.id = id;
      const editedTask = { ...etask };
      const edited = tasksState.tasks.filter((task) => task.id !== id);
      edited.push(editedTask);
      tasksState.setTasks(edited);
    }
  };

  return (
    <div
      id="edit-modal"
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Edit Task</h2>
        <input
          type="text"
          id="edit-input"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          className="w-full rounded-lg px-4 py-3 border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          aria-label="Edit task input"
        ></input>
        <div className="flex justify-end gap-3 mt-5">
          <button
            id="cancel-edit"
            className="bg-gray-600 text-gray-200 font-semibold rounded-lg px-5 py-2 hover:bg-gray-500 transition"
            onClick={cancleHandle}
          >
            Cancel
          </button>
          <button
            id="save-edit"
            className="bg-teal-800 text-white font-semibold rounded-lg px-5 py-2 hover:bg-teal-700 transition"
            onClick={editHandle}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
