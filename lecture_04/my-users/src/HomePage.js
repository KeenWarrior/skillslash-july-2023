import { Button, Table, TableCell, TableHead, TableRow } from "@mui/material";
import axios from "./utils/axios";
import { useState } from "react";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  return (
    <div>
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
          </TableRow>
          {users.map((user) => {
            return (
              <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
              </TableRow>
            );
          })}
        </TableHead>
      </Table>
    </div>
  );
};

export default HomePage;
