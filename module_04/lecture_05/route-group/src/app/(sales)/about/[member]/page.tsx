import Link from "next/link";

async function getUserInfo(username: string) {
  console.log("ServerSideComponent");
  const res = await fetch("https://api.github.com/users/"+username);
  const data = await res.json();
  return data;
}

export default async function Page({ params }: { params: { member: string } }) {

  const user = await getUserInfo(params.member);

  return (
    <>
      <div>Member name : {user.name}</div>
    </>
  );
}
