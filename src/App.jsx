import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { useState } from 'react'

import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignupPage/SignupPage";
import FeedPage from "./pages/FeedPage/FeedPage";
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

    <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
    <Route path="/signup" element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
    <Route path="/*" element={<Navigate to='/login' />} />

    </Routes>

    )
}




  return (
    <Routes>
      <Route path="/" element={<FeedPage user={user}/>} />
      <Route path="/login" element={<LoginPage  handleSignUpOrLogin={handleSignUpOrLogin} />}/>
      <Route path="/signup" element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
<Route path="/:username" element={FeedPage} />  
    </Routes>
  );
}

export default App;
