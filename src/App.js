import React from "react";
import logo from "./logo.svg";
import "./App.css";
import index from "./index.js";
import Exercise from "./Components/Exercise";
import ExerciseList from "./Components/ExerciseList";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import Bmi from "./Components/Bmi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<ExerciseList />} />
        <Route path="/bmi" element={<Bmi/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
