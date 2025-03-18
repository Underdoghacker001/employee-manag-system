import React, { useState } from "react";

const Header = ({data}) => {
  // const [userName, setUserName] = useState('')

  // if(!data){
  //   setUserName('Admin')
  // }else{
  //   setUserName(data.firstName)
  // }
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    window.location.reload()

  }


  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">userName &#128075;</span>
      </h1>
      <button onClick={logOutUser} className="bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium cursor-pointer">
        Log out
      </button>
    </div>
  );
};

export default Header;
