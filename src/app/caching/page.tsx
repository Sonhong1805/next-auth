export default async function Caching() {
  const res = await fetch(
    "https://www.timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam",
    {
      // cache:"force-cache", // cache
      cache: "no-store", // không cache
    }
  );
  const data = await res.json();

  return (
    <div>
      <h1>Todo</h1>
      <pre>dateTime: {JSON.stringify(data.dateTime, null, 2)}</pre>
    </div>
  );
}
