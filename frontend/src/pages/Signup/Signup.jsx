import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");
    console.log(`${name}   ${email}  ${password}`);
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleRegister}>
        <Container maxWidth="sm">
          <Box
            sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
            noValidate
            autoComplete="off"
          >
            <Stack spacing={6}>
              <Typography variant="h4">Registration Page</Typography>
              <TextField
                id="name"
                label="name"
                type="text"
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <Typography color="error">{error}</Typography>}
              <Button variant="contained" type="submit">
                Register
              </Button>
              <Typography variant="h5">
                Already have an account ? {"     "}
                <Link to="/login">login</Link>
              </Typography>
            </Stack>
          </Box>
        </Container>
      </form>
    </div>
  );
};

export default Signup;
