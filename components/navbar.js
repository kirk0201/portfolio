export default function navbar() {
  return (
    <div className="fixed z-10 h-16 w-full bg-white shadow-2xl">
      <div className="relative left-1/2 w-2/3 -translate-x-1/2 bg-transparent py-5">
        <div className="flex">
          <div className="w-2/3 bg-transparent text-lg font-bold">
            Kim's PortFolio
          </div>
          <nav className="flex w-full justify-between font-bold">
            <li className="text-lg">Home</li>
            <li className="text-lg">About me</li>
            <li className="text-lg">Skills</li>
            <li className="text-lg">Archiving</li>
            <li className="text-lg">Projects</li>
          </nav>
        </div>
      </div>
    </div>
  );
}
