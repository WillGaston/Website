"use client"

import React, { useContext } from "react";
import { TopBarContext } from "@/components/TopBarContext";
import { IconContext } from "react-icons";

export default function TopBar({ children }) {

  return (
    <div className="flex w-full min-h-20 bg-w items-center">
        <nav className="bg-white flex w-full h-full justify-center flex-wrap">

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
      flex items-center rounded-md cursor-pointer transition-colors duration-300 ease-in-out m-2 justify-between
      ${ active === index ? "text-orange-500 underline" : 
        "text-black bg-white"
      } `}>

      <span className={`font-mono flex overflow-hidden transition-all w-[max-content] text-xs md:text-lg md:ml-2 no-underline hover:underline decoration-orange-500 m-0`}>
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