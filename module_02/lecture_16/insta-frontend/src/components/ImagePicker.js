"use client";

import { Button, Typography } from "@mui/material";
import axios from "@/utils/axios";
import { useFilePicker } from "use-file-picker";

export default function ImagePicker() {
  const { openFilePicker, filesContent, loading } = useFilePicker({
    accept: ".png, .jpg, .jpeg",
  });

  const handleSelect = (event) => {
    event.preventDefault();
    openFilePicker();
  };

  const handleUpload = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", filesContent[0]);
    axios.post("/files/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
  };

  return (
    <div>
      <Button onClick={handleSelect}>Upload Image</Button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {filesContent.map((file, index) => {
            return <Typography key={index}>{file.name}</Typography>;
          })}

          {filesContent.length  && <Button onClick={handleUpload}>Upload</Button>}
        </>
      )}
    </div>
  );
}
