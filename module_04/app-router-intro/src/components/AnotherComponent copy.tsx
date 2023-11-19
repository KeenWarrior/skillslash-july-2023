async function getUserInfo() {
  console.log("AnotherComponent");
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  const data = await res.json();
  return data;
}

export default async function AnotherComponent() {
  const timeData = await getUserInfo();
  return (
    <>
      <h2>{timeData.datetime}</h2>
    </>
  );
}
