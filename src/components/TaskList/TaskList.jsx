import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="task-list"
      className="py-5 h-[50%] overflow-x-auto w-full mt-10 flex items-center justify-start gap-5 flex-npwrap"
    >
      {data.tasks.map((elem, id) => {
        if(elem.active){
          return <AcceptTask key={id} data= {elem}/>
        }
        if(elem.newTask){
          return <NewTask key={id} data= {elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={id} data= {elem}/>
        }
        if(elem.failed){
          return <FailedTask key={id} data= {elem}/>
        }
      })}
    </div>
  );
};

export default TaskList;
