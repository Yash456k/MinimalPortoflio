import React from "react";
import ScrollAnimations from "./components/ScrollAnimations";
import HomePageSection from "./components/HomePageSection";
import "./App.css";
import Technology from "./components/Technology";
import ProjectsIntro from "./components/ProjectsIntro";
import SidebarToggle from "./components/SidebarToggle";
import SkillsPage from "./components/SkillsPage";
import ContactsSection from "./components/ContactSection";

function App() {
  return (
    <div>
      <SidebarToggle />
      <HomePageSection />

      <ScrollAnimations />

      <SkillsPage />

      <ContactsSection />
    </div>
  );
}

export default App;
