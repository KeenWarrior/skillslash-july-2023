import {
  Button,
  IconButton,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "./utils/axios";
import { useState } from "react";
import CreateUserModal from "./modals/CreateUserModal";
import UpdateUserModal from "./modals/UpdateUserModal";
import DeleteUserModal from "./modals/DeleteUserModal";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div>Home Page</div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          axios.get("/users").then((res) => {
            setUsers(res.data);
          });
        }}
      >
        Fetch Users
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
          {users.map((user) => {
            return (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <UpdateUserModal user={user} />
                    <DeleteUserModal user={user} />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableHead>
      </Table>
      <CreateUserModal/>
    </div>
  );
};

export default HomePage;
