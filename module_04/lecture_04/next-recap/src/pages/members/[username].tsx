import members from "@/data/members";

export default function MemberPage({ member }: { member: any }) {
  return (
    <>
      <h1>Members Username Page</h1>
      <h2>{member.name}</h2>
      <p>{member.phone}</p>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: members.map((member) => ({
      params: {
        username: member.username,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { username: string };
}) {
  const member = members.find((member) => member.username === params.username);

  return {
    props: {
      member,
    },
  };
}
