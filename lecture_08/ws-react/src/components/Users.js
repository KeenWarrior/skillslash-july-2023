import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function Users({ users }) {

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {users.map((user) => {
        return (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={user.name} src={message.photoURL} />
              </ListItemAvatar>
              <ListItemText primary={message.name} secondary={message.text} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
}
