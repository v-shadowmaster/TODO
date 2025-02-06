import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const AddEditNotes = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  const handleAddNote = async (e) => {
    e.preventDefault();
    // Add your logic to save the note here
    // For example, you can make an API call to save the note
    console.log({ title, date, content, tags });
    navigate("/dashboard"); // Navigate back to the dashboard after adding the note
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleAddNote}>
        <Container maxWidth="sm">
          <Box
            sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
            noValidate
            autoComplete="off"
          >
            <Stack spacing={6}>
              <Typography variant="h4">Add Note</Typography>
              <TextField
                id="title"
                label="Title"
                type="text"
                variant="standard"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id="date"
                label="Date"
                type="date"
                variant="standard"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="content"
                label="Content"
                type="text"
                variant="standard"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                multiline
                rows={4}
              />
              <TextField
                id="tags"
                label="Tags (comma separated)"
                type="text"
                variant="standard"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
              <Button variant="contained" type="submit">
                Add Note
              </Button>
            </Stack>
          </Box>
        </Container>
      </form>
    </div>
  );
};

export default AddEditNotes;
