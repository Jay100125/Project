import React from "react";
import TopBar from "./components/top/TopBar";
import Write from "./pages/write/Writee";
// import Setting from "./pages/setting/Setting";
// import Home from "./pages/home/Home";
 import Single from "./pages/single/Single";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom"


function App(){
    return (
      <>
      <TopBar />
      <Single />
      </>
    )
}

export default App;