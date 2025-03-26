import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <>
      <div className="p-10 bg-[#1C1C1C] h-screen">
        <Header data= {props.data} changeUser={props.changeUser}/>
        <TaskListNumbers data= {props.data} changeUser={props.changeUser}/>
        <TaskList data= {props.data} changeUser={props.changeUser}/>
      </div>
    </>
  );
};

export default EmployeeDashboard;
