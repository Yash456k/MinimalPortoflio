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
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <SidebarToggle />
      <HomePageSection />

      <ScrollAnimations />

      <SkillsPage />

      <ContactsSection />
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-lg">Yash Khambhatta &copy; {currentYear}</p>
      </footer>
    </div>
  );
}

export default App;
