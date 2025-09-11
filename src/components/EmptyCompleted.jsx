import React from "react";

const EmptyCompleted = () => {
  return (
    <div
      id="completed-empty-state"
      className="text-center p-8 bg-black/20 rounded-lg mt-6"
    >
      <svg
        className="mx-auto h-12 w-12 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <h3 className="mt-2 text-xl font-medium text-white">
        No completed tasks
      </h3>
      <p className="mt-1 text-sm text-gray-400">
        Once you complete a task, it will show up here.
      </p>
    </div>
  );
};

export default EmptyCompleted;
