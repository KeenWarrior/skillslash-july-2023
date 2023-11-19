import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function TopAppBar() {
  return (
    <AppBar position="static">
      <Toolbar
        style={{
          gap: "1rem",
        }}
      >
        <Typography variant="h5" component="div">
          Vercel
        </Typography>
        <Typography variant="body1" component="div">
          <Link href={"/showcase"}>Showcase</Link>
        </Typography>
        <Typography variant="body1" component="div">
          <Link href={"/docs"}>Docs</Link>
        </Typography>
        <Typography variant="body1" component="div">
          <Link href={"/blog"}>Blog</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
