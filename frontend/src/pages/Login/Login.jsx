import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import "../../index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");
    // Add your login logic here

    console.log(`${email}  ${password}`);
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <Container maxWidth="sm">
          <Box
            sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
            noValidate
            autoComplete="off"
          >
            <Stack spacing={6}>
              <Typography variant="h4">Login Page</Typography>
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
                Login
              </Button>
              <Typography variant="h5">
                Not registered yet ? {"   "}
                <Link to="/signup">create an account</Link>
              </Typography>
            </Stack>
          </Box>
        </Container>
      </form>
    </div>
  );
};

export default Login;
