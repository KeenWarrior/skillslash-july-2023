import axios from "axios";

export default function UsersWithUsername({ user }: { user: any }) {
  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const username = context.params.username;

  try {
    const response = await axios.get(
      "https://api.github.com/users/" + username
    );
    const user = response.data;

    return {
      props: {
        user,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
