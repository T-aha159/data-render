import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "../home";
import Single from "../single"
export default function AppRouter() {
  return (
    <Router>
     <Routes>
         <Route path="/" element={<Home/>} ></Route>
         <Route path="Single" element={<Single/>}></Route>
     </Routes>
    </Router>
  );
}