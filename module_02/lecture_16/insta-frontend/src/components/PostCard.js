"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useRouter } from "next/navigation";
import axios from "@/utils/axios";
import { getCookie } from "cookies-next";
import { set } from "mongoose";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard({ post }) {
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(post.liked || false);
  const [likedByCount, setLikedByCount] = React.useState(post.likedByCount);
  const router = useRouter();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLike = async () => {
    console.log("getCookie", getCookie("access-token"));
    const response = await axios.patch(
      `/posts/${post.id}/like`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getCookie("access-token"),
        },
      }
    );

    setLiked(response.data.liked);
    setLikedByCount(response.data.likedByCount);
  };

  return (
    <Card sx={{ width: 400 }} style={{}}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            src={post.user.avatar}
            onClick={() => {
              router.push(`/users/${post.user.id}`);
            }}
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.user.name}
        subheader={post.time}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.imageSrc}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.caption}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {likedByCount} likes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLike}>
          <FavoriteIcon style={{
            color: liked ? "red" : "grey"
          }}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
