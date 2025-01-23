import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 text-white z-50">
      {/* Spinning Loader */}
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-300 mb-6"></div>

      {/* Loading Text */}
      <p className="text-blue-200 text-2xl font-semibold">
        Loading <span className="text-blue-400">Portfolio</span>... Please Wait
      </p>
    </div>
  );
};

export default Loader;
