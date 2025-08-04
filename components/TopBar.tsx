"use client"

import React, { useContext } from "react";
import { TopBarContext } from "@/components/TopBarContext";
import { IconContext } from "react-icons";

export default function TopBar({ children }) {

  return (
    <div className="flex w-screen h-16 bg-white shadow-md border-b items-center">
        <nav className="bg-white flex w-full h-full justify-center gap-4">

          {children}

        </nav>
    </div>
  )
}

export function TopBarItem({text, index}) {
  const context = useContext(TopBarContext);
  const { active, setActive } = context;
  return (
    <li
      onClick = {() => setActive(index)} 
      className={`
      relative flex items-center py-2 md:px-1 my-2 rounded-md cursor-pointer transition-colors duration-300 ease-in-out
      ${ active === index ? "text-orange-500 underline" : 
        "text-black bg-white"
      } `}>

      <span className={`font-mono flex overflow-hidden transition-all w-12 md:w-32 text-xs md:text-lg md:ml-2 no-underline hover:underline decoration-orange-500`}>
        {text}
      </span>

    </li>
  )
}

export function TopBarButton({icon, link}) {
  return (
    <IconContext.Provider value={{ color: "black", className: "global-class-name", size: "2em" }}>
      <a 
        href={link}
        target="_blank"
        className="flex items-center md:px-4 py-2 bg-white text-black rounded transition"
      >
        {icon}
    </a>
  </IconContext.Provider>
  )
}