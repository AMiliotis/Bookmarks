import { AppBar, Button, ButtonGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export default function Counter({ counter, setCounter }) {
  return (
    <React.Fragment>
      <AppBar>
        <Typography sx={{ color: "white" }}>
          You can also try my{" "}
          <Link to="/">
            <Typography display="inline" sx={{ color: "green" }}>
              bookmarks!
            </Typography>
          </Link>
        </Typography>
      </AppBar>
      <Box
        sx={{
          background: "linear-gradient(45deg, red, blue)",
        }}
        marginTop={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography sx={{ color: "black" }} variant="h1" fontSize={120}>
          {counter}
        </Typography>
      </Box>
      <Typography variant="p">
        The counter State gets saved on{" "}
        <Typography fontWeight="bold" display="inline" sx={{ color: "blue" }}>
          Local Storage
        </Typography>
        , if you want to
        <Typography fontWeight="bold" display="inline" sx={{ color: "red" }}>
          {" "}
          delete
        </Typography>{" "}
        the saved state click the button bellow
      </Typography>
      <Box marginTop={1}>
        <Button
          sx={{
            bgcolor: "orange",
            color: "black",
            "&:hover": {
              backgroundColor: "orangered",
            },
          }}
          onClick={() => {
            localStorage.removeItem("MY_COUNTER");
            window.location.reload(false);
          }}
          variant="contained"
        >
          Delete Local Storage
        </Button>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        {" "}
        <ButtonGroup size="large" variant="text" aria-label="text button group">
          <Button
            variant="contained"
            sx={{
              bgcolor: "red",
              "&:hover": {
                backgroundColor: "darkred",
              },
            }}
            onClick={() => setCounter((prevCount) => prevCount - 1)}
          >
            Minus
          </Button>
          <Button
            sx={{
              bgcolor: "green",
              "&:hover": {
                backgroundColor: "darkgreen",
              },
            }}
            variant="contained"
            onClick={() => setCounter((prevCount) => prevCount + 1)}
          >
            Plus
          </Button>
        </ButtonGroup>
      </Box>
    </React.Fragment>
  );
}
