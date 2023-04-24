import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Usertable from "./components/Usertable";
import Home from "./components/Home";

export default class App extends Component {
  render() {
    return (
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/usertable" element={<Usertable/>}/>
          <Route path="/edit/:id" element={<Home/>}/>
        </Routes>
      </Router>
    );
  }
}
