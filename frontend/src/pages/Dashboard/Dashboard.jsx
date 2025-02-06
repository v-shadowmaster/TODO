import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/NoteCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import "../../index.css";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-note"); // Adjust the route as needed
  };
  return (
    <>
      <Navbar />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <NoteCard
            title="sdf"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ea corporis quo unde architecto pariatur libero nisi eius, vel natus repellat nulla minima aperiam sequi."
            date="6th jan 2025"
            isPinned={true}
            onDelete={() => {}}
            onEdit={() => {}}
            onPinNote={() => {}}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <NoteCard
            title="sdf"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ea corporis quo unde architecto pariatur libero nisi eius, vel natus repellat nulla minima aperiam sequi."
            date="6th jan 2025"
            isPinned={true}
            onDelete={() => {}}
            onEdit={() => {}}
            onPinNote={() => {}}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <NoteCard
            title="sdf"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ea corporis quo unde architecto pariatur libero nisi eius, vel natus repellat nulla minima aperiam sequi."
            date="6th jan 2025"
            isPinned={true}
            onDelete={() => {}}
            onEdit={() => {}}
            onPinNote={() => {}}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <NoteCard
            title="sdf"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ea corporis quo unde architecto pariatur libero nisi eius, vel natus repellat nulla minima aperiam sequi."
            date="6th jan 2025"
            isPinned={true}
            onDelete={() => {}}
            onEdit={() => {}}
            onPinNote={() => {}}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <NoteCard
            title="sdf"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ea corporis quo unde architecto pariatur libero nisi eius, vel natus repellat nulla minima aperiam sequi."
            date="6th jan 2025"
            isPinned={true}
            onDelete={() => {}}
            onEdit={() => {}}
            onPinNote={() => {}}
          />
        </Grid>
      </Grid>

      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default Dashboard;
