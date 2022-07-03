import DehazeIcon from "@mui/icons-material/Dehaze";
import { useState } from "react";

export default function Navbar(props) {
  const [showMenu, setShowMenu] = useState(false);
  const show = () => {
    console.log(showMenu);
    setShowMenu(!showMenu);
  };
  console.log(showMenu);
  return (
    <>
      <div className="fixed z-10 h-16 w-screen shadow-2xl lg:bg-white">
        <div className="relative left-1/2 -translate-x-1/2 bg-gray-300 py-5 lg:w-2/3 lg:bg-transparent">
          <div className="lg:flex">
            <div className="flex justify-between bg-transparent px-10 text-center text-lg font-bold lg:w-2/3 ">
              <div>
                Kims <span className="text-blue-400">P</span>ort
                <span className="text-green-500">F</span>olio
              </div>
              <button onClick={show} className="block lg:hidden">
                <DehazeIcon />
              </button>
            </div>
            <nav
              className={`${
                showMenu ? "visible" : "hidden"
              } w-full cursor-pointer justify-between text-center font-bold md:flex`}
            >
              <li
                className="text-lg hover:scale-110 hover:first-letter:text-blue-500"
                onClick={props.move}
              >
                <span>H</span>ome
              </li>
              <li
                className=" group text-lg hover:scale-110 "
                onClick={props.move1}
              >
                <span className="group-hover:text-red-300">About </span>
                <span>me</span>
              </li>
              <li
                className="text-lg hover:scale-110 hover:first-letter:text-yellow-500"
                onClick={props.move2}
              >
                Skills
              </li>
              <li
                className="text-lg hover:scale-110 hover:first-letter:text-green-600"
                onClick={props.move3}
              >
                Archiving
              </li>
              <li
                className="text-lg hover:scale-110 hover:first-letter:text-sky-500"
                onClick={props.move4}
              >
                Projects
              </li>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
