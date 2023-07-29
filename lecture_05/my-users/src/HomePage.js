import {
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
import { useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";

const HomePage = () => {
  const [queryKey, setQueryKey] = useState([uuidv4()]);

  const { data, isLoading } = useQuery(queryKey, async () => {
    const response = await axios.get("/users");
    return response.data;
  });

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

      {isLoading && !data && <div>Loading...</div>}

      {!isLoading && data.length === 0 && <div>No users found</div>}

      {data && data.length > 0 && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
            {data.map((user) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <UpdateUserModal user={user} setQueryKey={setQueryKey} />
                      <DeleteUserModal user={user} setQueryKey={setQueryKey} />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableHead>
        </Table>
      )}

      <CreateUserModal setQueryKey={setQueryKey} />
    </div>
  );
};

export default HomePage;
