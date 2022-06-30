export default function navbar() {
  return (
    <div className="relative">
      <div className="fixed left-1/2 w-2/3 -translate-x-1/2 bg-green-300 py-5">
        <div className="flex">
          <div className="w-2/3 bg-red-300 text-lg font-bold">
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
