import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { useState } from 'react'

import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignupPage/SignupPage";


import userService from "./utils/userService";


function App() {
  const [user, setUser] = useState(userService.getUser());


  //for updating the state 
  function handleSignUpOrLogin(){
    setUser(userService.getUser())
  }


if(!user){
  return (
    <Routes>

    <Routes path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
    <Routes path="/signup" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
    <Route path="/*" element={<Navigate to='/login' />} />

    </Routes>

    )
}




  return (
    <Routes>
      <Route path="/" element={<h1>Home Pageeeeeeeeeee</h1>} />
      <Route path="/login" element={<LoginPage  handleSignUpOrLogin={handleSignUpOrLogin} />}/>
      <Route path="/signup" element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />

    </Routes>
  );
}

export default App;
