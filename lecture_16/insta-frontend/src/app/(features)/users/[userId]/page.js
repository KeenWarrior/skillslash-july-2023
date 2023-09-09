import AddPostFab from "@/components/AddPostFab";
import PostCard from "@/components/PostCard";
import UserInfo from "@/components/UserInfo";
import { get } from "mongoose";
import { cookies } from "next/headers";
import { Suspense } from "react";

const getPosts = async (userId) => {
  const response = await fetch(
    `http://localhost:5000/v1/posts/user/` + userId,
    {
      cache: "no-cache",
    }
  );
  const posts = await response.json();
  return posts;
};

const getUser = async (userId) => {
  const response = await fetch(`http://localhost:5000/v1/users/${userId}`, {
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookies().get("access-token").value,
    },
  });
  const user = await response.json();
  return user;
};

export default async function UserProfile({ params }) {
  const { userId } = params;

  const posts = await getPosts(userId);
  const user = await getUser(userId);

  console.log(user);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        gap: "1rem",
        paddingTop: "2rem",
      }}
    >
      <UserInfo user={user} />
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}

      <Suspense>
        <AddPostFab />
      </Suspense>
    </div>
  );
}
