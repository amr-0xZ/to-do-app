import React from "react";

const AppContainer = ({ children }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8">
      {children}
    </div>
  );
};

export default AppContainer;
