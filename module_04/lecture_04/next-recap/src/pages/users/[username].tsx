import axios from "axios";
import Script from "next/script";

export default function UsersWithUsername({ user }: { user: any }) {
  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <button id="hitme">Click Me</button>
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
