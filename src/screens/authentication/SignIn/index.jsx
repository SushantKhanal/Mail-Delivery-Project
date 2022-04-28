import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

export default function SignIn(props) {
  let [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    //CHECK IF CREDENTIALS VALID
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccess({});
    }, "2000");
  };

  const onSuccess = (res) => {
    props.changeLoggedInStateHandler(res, true);
  };

  const onFailure = (res) => {
    alert("[Login Failed] res:", res);
  };

  const loading = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <CircularProgress disableShrink />;
      </div>
    );
  };

  const displayForm = () => (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 4 }}>
        Sign In
      </Button>
    </Box>
  );

  const theme = createTheme();

  return (
    <div
      style={{
        backgroundColor: "#1976d2",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 5,
          width: 450,
          height: 500,
          [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh",
          },
        }}
      >
        {isLoading ? (
          loading()
        ) : (
          <>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {displayForm()}
          </>
        )}
      </Card>
    </div>
  );
}
