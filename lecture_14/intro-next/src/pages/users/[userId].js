import InfoCard from "@/components/InfoCard";
import axios from "axios";

export default function UsersHome({ user }) {
  return (
    <>
      <InfoCard user={user} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.userId;

  const response = await axios.get("https://api.github.com/users/" + userId);

  return {
    props: {
      user: response.data,
    },
  };
}
