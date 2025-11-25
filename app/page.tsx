"use client"

import React, { useContext } from "react";
import { TopBarProvider, TopBarContext } from "@/components/Navigation/TopBarContext";
import TopBar from "@/components/Navigation/TopBar";
import HomePage from "@/components/PrimaryPages/HomePage";
import ProjectsPage from "@/components/Projects";


import { motion, AnimatePresence } from "framer-motion";
import ExperienceSection from "@/components/PrimaryPages/ExperiencePage";
import AboutPage from "@/components/PrimaryPages/AboutPage";
//import ReviewsPage from "@/components/Reviews";


export default function Home() {
  return (
    <TopBarProvider>
      <HomeContent />
    </TopBarProvider>
  );
}

function HomeContent() {
  const { active } = useContext(TopBarContext);

  return (
    <div className="flex flex-col h-screen w-screen">
      <TopBar />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {active === 0 && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="h-full"
            >
              <HomePage />
            </motion.div>
          )}
          
          {active === 1 && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="h-full"
            >
              <AboutPage />
            </motion.div>
          )}

          {active === 3 && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="h-full"
            >
              <ProjectsPage />
            </motion.div>
          )}

          {active === 2 && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="h-full"
            >
              <ExperienceSection />
            </motion.div>
          )}

          {/* {active === 4 && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="relative w-full"
            >
              <ReviewsPage />
            </motion.div>
          )} */}
        </AnimatePresence>
      </div>
    </div>
  );
}