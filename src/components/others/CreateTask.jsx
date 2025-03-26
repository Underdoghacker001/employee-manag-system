import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  
  // const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();

    // setNewTask(
      const task = {taskTitle, taskDate, category, taskDescription, active:false, newTask:true, completed:false, failed:false}
    // )
    const data = JSON.parse(localStorage.getItem('employees'))

    data.forEach((elem) => {
      if(assignTo == elem.firstName){
        if(!elem.tasks){
          elem.tasks = []
        }
        elem.tasks.push(task)
        console.log(elem);
        if (!elem.newTask) {
          elem.newTask = 0;
        }
        elem.newTask += 1; // Increase active count
      
      }
    })
    localStorage.setItem('employees', JSON.stringify(data))
    

    // data.forEach(function(elem){
    //   if(assignTo == elem.firstName){
    //     elem.tasks.push(newTask)
    //     console.log(elem);
    //   }
    // })

    setTaskTitle('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    setTaskDescription('')
  };
  return (
    <>
      <div className="p-5 bg-[#1c1c1c] mt-5 rouded">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-wrap w-full items-start justify-between"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5 rouded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make a UI Design"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
                className="text-sm py-1 px-2 w-4/5 rouded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
                className="text-sm py-1 px-2 w-4/5 rouded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Employee Name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
                className="text-sm py-1 px-2 w-4/5 rouded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>
          <div className="w-2/5 flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
              className="w-full h-44 text-sm px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              id=""
            ></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
