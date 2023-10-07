import { useSelector } from "react-redux";

export default function Home() {

  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      <h1>Welcome {user.displayName}</h1>
    </div>
  );
}
