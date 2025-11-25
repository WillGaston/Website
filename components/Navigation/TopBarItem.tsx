import { useContext } from "react";
import { TopBarContext } from "./TopBarContext";

interface TopBarItemProps {
  text: string,
  index: number
}

export default function TopBarItem({text, index}: TopBarItemProps) {
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