"use client";

import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";

export default function AddPostFab() {
  const router = useRouter();
  return (
    <Fab
      color="primary"
      aria-label="add"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
      }}
      onClick={() => {
        router.push("/create");
      }}
    >
      <AddIcon />
    </Fab>
  );
}
