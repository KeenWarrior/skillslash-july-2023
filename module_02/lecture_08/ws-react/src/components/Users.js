import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useQuery } from "@tanstack/react-query";
import axios from "../utils/axios";
import { BorderRight } from "@mui/icons-material";
import { useDispatch } from "react-redux";

export default function Users() {
  const dispatch = useDispatch();
  const { data: users, isLoading } = useQuery(
    ["users"],
    async () => {
      const response = await axios.get("/users");
      return response.data;
    },
    {
      refetchInterval: 1000,
      onSuccess: (data) => {
        dispatch({ type: "SET_USERS", payload: data });
      },
    }
  );

  return (
    <List
      sx={{
        width: "332px",
        bgcolor: "background.paper",
        borderRight: "1px solid black",
      }}
    >
      {users &&
        users.map((user) => {
          return (
            <ListItem
              alignItems="flex-start"
              key={user.uid}
              onClick={() => {
                dispatch({ type: "SET_SELECTED_CHAT", payload: user });
              }}
            >
              <ListItemAvatar>
                <Avatar alt={user.name} src={user.picture} />
              </ListItemAvatar>
              <ListItemText primary={user.name} secondary={user.uid} />
            </ListItem>
          );
        })}
    </List>
  );
}
