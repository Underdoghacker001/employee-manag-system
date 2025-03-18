import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[370px] p-5 bg-yellow-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-yellow-600 py-1 px-2 text-sm font-bold rounded cursor-pointer">
          Mark as Completed
        </button>
        <button className="bg-red-500 pu-1 px-2 text-sm font-bold rounded cursor-pointer">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
