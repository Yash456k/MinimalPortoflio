import React from "react";
import ScrollAnimations from "./components/ScrollAnimations";
import HomePageSection from "./components/HomePageSection";
import "./App.css";
import Technology from "./components/Technology";
import ProjectsIntro from "./components/ProjectsIntro";
import SidebarToggle from "./components/SidebarToggle";
import SkillsPage from "./components/SkillsPage";

function App() {
  return (
    <div>
      {/* <SidebarToggle /> */}
      <HomePageSection />

      <ScrollAnimations />
      <Technology />
      <SkillsPage />

      {/* <HomePageSection /> */}
    </div>
  );
}

export default App;
