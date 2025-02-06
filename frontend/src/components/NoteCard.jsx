import React, { useState } from "react";
import PushPinIcon from "@mui/icons-material/PushPin";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ".././index.css";
import Chip from "@mui/material/Chip";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  const [pin, setPin] = useState(false);
  return (
    <>
      <Card sx={{ minWidth: 400, maxWidth: 600 }}>
        <CardContent>
          <Stack direction="row" spacing={60}>
            <Typography variant="h4" color="blue">
              {title}
            </Typography>

            <div className="container">
              <PushPinIcon style={{ color: pin ? "gold" : "grey" }} />
            </div>
          </Stack>
        </CardContent>

        <CardContent>
          <Stack direction="column" spacing={2}>
            <Typography variant="h6" color="grey">
              {date}
            </Typography>
            <Typography variant="h6">{content}</Typography>
          </Stack>
        </CardContent>

        <CardContent>
          <Stack direction="row" spacing={2}>
            <Chip label="# Deletable" onDelete={() => {}} />
            <Chip label="# yes" variant="outlined" onDelete={() => {}} />
            <Chip label="# no " onDelete={() => {}} />
            <Chip label="# hi there" onDelete={() => {}} />
          </Stack>
        </CardContent>

        <CardActions>
          <Stack direction="row" spacing={4}>
            <Button variant="contained" color="success" className="container ">
              <EditIcon /> {"  "} Edit
            </Button>

            <Button variant="contained" color="error" className="container ">
              <DeleteIcon /> {"  "}Delete
            </Button>
          </Stack>
        </CardActions>
      </Card>


      
    </>
  );
};

export default NoteCard;
