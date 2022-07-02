export default function Summary({ fn, content, url, urls }) {
  return (
    <div className="flex justify-between py-3">
      <div className="w-1/3 font-semibold text-gray-400">{fn}</div>
      <div>
        <div className="font-semibold">{content}</div>
        {url ? (
          <a
            className="text-blue-500"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {url}
          </a>
        ) : undefined}
        {urls ? (
          <a
            className="block text-blue-500"
            href={urls}
            target="_blank"
            rel="noreferrer"
          >
            {urls}
          </a>
        ) : undefined}
      </div>
    </div>
  );
}
