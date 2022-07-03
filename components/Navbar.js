export default function Navbar(props) {
  console.log(props);
  return (
    <div className="fixed z-10 h-16 w-full bg-white shadow-2xl">
      <div className="relative left-1/2 w-2/3 -translate-x-1/2 bg-transparent py-5">
        <div className="flex">
          <div className="w-2/3 bg-transparent text-lg font-bold">
            Kims PortFolio
          </div>
          <nav className="flex w-full cursor-pointer justify-between font-bold">
            <li
              className="text-lg hover:scale-110 hover:text-blue-200"
              onClick={props.move}
            >
              <span className="">H</span>ome
            </li>
            <li
              className="text-lg hover:scale-110 hover:text-blue-200"
              onClick={props.move1}
            >
              About me
            </li>
            <li
              className="text-lg hover:scale-110 hover:text-blue-200"
              onClick={props.move2}
            >
              Skills
            </li>
            <li
              className="text-lg hover:scale-110 hover:text-blue-200"
              onClick={props.move3}
            >
              Archiving
            </li>
            <li
              className="text-lg hover:scale-110 hover:text-blue-200"
              onClick={props.move4}
            >
              Projects
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
}
