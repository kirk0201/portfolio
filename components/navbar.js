export default function navbar() {
  return (
    <div className="max-w-full">
      <div className="m-auto w-2/3 bg-green-300">
        <div className="flex">
          <div className="w-2/3 bg-red-300">d</div>
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
