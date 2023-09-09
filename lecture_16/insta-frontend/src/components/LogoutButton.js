"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

export default function LogoutButton() {
  const router = useRouter();

  return (
    <Button
      color="inherit"
      onClick={() => {
        setCookie("access-token", "");
        setCookie("refresh-token", "");
        router.push("/login");
      }}
    >
      Logout
    </Button>
  );
}
