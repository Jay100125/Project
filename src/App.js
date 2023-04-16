import React from "react";
import TopBar from "./components/top/TopBar";
import Write from "./pages/write/Writee";
import Setting from "./pages/setting/Setting";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
//import { Route, Switch } from "react-router";

function App(){
  const user = false;
    return (
      <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/setting" element={user ? <Setting /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />

      </Routes>
      </Router>
    )
}

export default App;