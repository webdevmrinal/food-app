import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="app-body px-6 py-10">
      <LandingPage />
      <Navigation />
    </div>
  );
}

export default App;
