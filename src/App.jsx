import React from "react";
import ScrollAnimations from "./components/ScrollAnimations";
import HomePageSection from "./components/HomePageSection";
import "./App.css";
import Technology from "./components/Technology";
import ProjectsIntro from "./components/ProjectsIntro";

function App() {
  return (
    <div>
      <HomePageSection />
      <ProjectsIntro />

      <ScrollAnimations />
      <Technology />
      <HomePageSection />
    </div>
  );
}

export default App;
