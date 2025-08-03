"use client"

import React, { useContext } from "react";
import { TopBarProvider, TopBarContext } from "@/components/TopBarContext";
import { TopBarItem, TopBarButton } from "@/components/TopBar";
import TopBar from "@/components/TopBar";
import HomePage from "@/components/Home";
import ProjectsPage from "@/components/Projects";
import AboutPage from "@/components/About";
import GalleryPage from "@/components/GalleryPage";

import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";


import { motion, AnimatePresence } from "framer-motion";
import ReviewsPage from "@/components/Reviews";


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
      <TopBar>
        <TopBarItem text="William Gaston" index={0}/>
        <TopBarItem text="About Me & Academics" index={1}/>
        <TopBarItem text="Projects" index={2}/>
        <TopBarItem text="Gallery" index={3}/>
        {/* <TopBarItem text="Reviews" index={4}/> */}
        <TopBarButton icon={<CiLinkedin />} link={"https://www.linkedin.com/in/WillGaston1/"} />
        <TopBarButton icon={<FiGithub />} link={"https://github.com/WillGaston"} />
      </TopBar>
      <div className="flex pt16">
      <AnimatePresence mode="wait">
          {active === 0 && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="relative w-full"
            >
              <HomePage />
            </motion.div>
          )}
          
          {active === 1 && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="relative w-full"
            >
              <AboutPage />
            </motion.div>
          )}

          {active === 2 && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="relative w-full"
            >
              <ProjectsPage />
            </motion.div>
          )}

          {active === 3 && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="relative w-full"
            >
              <GalleryPage />
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