import Link from "next/link";

async function getRepoInfo(username: string, repo: string) {
  const res = await fetch(`https://api.github.com/repos/${username}/${repo}`);
  const data = await res.json();
  return data;
}

export default async function Page({
  params,
}: {
  params: { member: string; repo: string };
}) {
  const repo = await getRepoInfo(params.member, params.repo);

  return (
    <>
      <div>
        <h3>Repo name : {repo.full_name}</h3>
        <p>Repo description : {repo.description}</p>
      </div>
    </>
  );
}
