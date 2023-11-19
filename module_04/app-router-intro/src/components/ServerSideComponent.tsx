async function getUserInfo() {
  console.log("ServerSideComponent");
  const res = await fetch("https://api.github.com/users/keenwarrior", {
    next: {
        revalidate: 60,
    }
  });
  const data = await res.json();
  return data;
}

export default async function ServerSideComponent() {
  const userData = await getUserInfo();
  return (
    <>
      <h2>{userData.name}</h2>
      <img src={userData.avatar_url} />
    </>
  );
}
