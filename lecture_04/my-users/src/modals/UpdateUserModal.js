import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { IconButton, TextField } from "@mui/material";
import axios from "../utils/axios";
import EditIcon from '@mui/icons-material/Edit';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UpdateUserModal({user}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = React.useState({
    name: user.name,
    age: ""+user.age,
  });

  const handleChange = (e) => {
    setFormData((prev) => {
      const newState = { ...prev, [e.target.name]: e.target.value };
      console.log(newState);
      return newState;
    });
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <EditIcon/>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <TextField
              name="name"
              label="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              name="age"
              label="age"
              variant="outlined"
              value={formData.age}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                axios
                  .patch("/users/" + user.id, {
                    name: formData.name,
                    age: +formData.age,
                  })
                  .then((res) => {
                    setOpen(false);
                  });
              }}
            >
              Update
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
