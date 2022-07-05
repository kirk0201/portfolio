export default function Summary({ fn, content, url, urls }) {
  return (
    <div className="flex flex-col py-3 md:justify-between lg:flex-row">
      <div className="w-1/2 font-semibold text-gray-400">✔️{fn}</div>
      <div>
        <div className="font-semibold ">{content}</div>
        {url ? (
          <div className="">
            <a
              className=" text-sm text-blue-500 md:text-base "
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {url}
            </a>
          </div>
        ) : undefined}
        {urls ? (
          <div className="">
            <a
              className="text-sm text-blue-500 md:text-base "
              href={urls}
              target="_blank"
              rel="noreferrer"
            >
              {urls}
            </a>
          </div>
        ) : undefined}
      </div>
    </div>
  );
}
