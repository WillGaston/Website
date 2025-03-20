"use client"

import React, { useContext } from "react";
import { TopBarContext } from "@/components/TopBarContext";

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

      <span className={`font-mono overflow-hidden transition-all w-30 ml-2`}>
        {text}
      </span>

    </li>
  )
}