import { ReactNode } from "react";
import { IconContext } from "react-icons";

interface TopBarButtonProps {
  icon: ReactNode,
  link: string,
}

export default function TopBarButton({icon, link}: TopBarButtonProps) {
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