import AddPostFab from "@/components/AddPostFab";
import PostCard from "@/components/PostCard";
import { cookies } from "next/headers";
import { Suspense } from "react";

const getPosts = async () => {
  const response = await fetch("http://localhost:5000/v1/posts", {
    cache: "no-cache",
    headers : {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + cookies().get("access-token").value,
    }
  });
  const posts = await response.json();
  return posts;
};

export default async function Home() {
  const posts = await getPosts();

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
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}

      <Suspense>
        <AddPostFab />
      </Suspense>
    </div>
  );
}
