"use client"

import React, { useContext } from "react";
import { TopBarContext } from "@/components/TopBarContext";
import { IconContext } from "react-icons";

export default function TopBar({ children }) {

  return (
    <div className="flex flex-col w-screen h-16 bg-white shadow-md border-b items-center">
        <nav className="bg-white flex flex-1 gap-4">

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
      relative flex items-center py-2 px-4 my-2 rounded-md cursor-pointer transition-colors duration-300 ease-in-out
      ${ active === index ? "text-orange-500 underline" : 
        "text-black bg-white"
      } `}>

      <span className={`font-mono overflow-hidden transition-all w-30 ml-2 no-underline hover:underline decoration-orange-500`}>
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
        className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded transition"
      >
        {icon}
    </a>
  </IconContext.Provider>
  )
}