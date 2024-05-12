import React from "react";
import ScrollAnimations from "./components/ScrollAnimations";
import HomePageSection from "./components/HomePageSection";
import "./App.css";
import Technology from "./components/Technology";

function App() {
  return (
    <div>
      <HomePageSection />

      <ScrollAnimations />
      <Technology />
    </div>
  );
}

export default App;
