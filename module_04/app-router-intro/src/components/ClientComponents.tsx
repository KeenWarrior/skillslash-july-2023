"use client";

import { use, useEffect, useMemo, useState } from "react";

async function getUserInfo() {
  console.log("ServerSideComponent");
  const res = await fetch("https://api.github.com/users/keenwarrior");
  const data = await res.json();
  return data;
}

export default function ClientComponents() {
  const [user, setUser] = useState({
    name: "Loading name...",
    avatar_url: "",
  });
  useEffect(() => {
    getUserInfo().then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <>
      <h2>{user.name}</h2>
      <img src={user.avatar_url} />
    </>
  );
}
