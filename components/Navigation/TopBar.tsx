"use client"

import { CiLinkedin } from "react-icons/ci"
import TopBarButton from "./TopBarButton"
import TopBarItem from "./TopBarItem"
import { FiGithub } from "react-icons/fi"

export default function TopBar() {

  return (
    <div className="flex w-full h-[80px] border-b border-gray-400 items-center">
        <nav className="flex w-full justify-center flex-wrap">
          <TopBarItem text="William Gaston" index={0}/>
          <TopBarItem text="About Me" index={1}/>
          <TopBarItem text="Experience" index={2}/>
          <TopBarItem text="Projects" index={3}/>
          <TopBarButton icon={<CiLinkedin />} link={"https://www.linkedin.com/in/WillGaston1/"} />
          <TopBarButton icon={<FiGithub />} link={"https://github.com/WillGaston"} />
        </nav>
    </div>
  )
}