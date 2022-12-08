import { AppBar, Button, ButtonGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export default function Counter({ counter, setCounter }) {
  return (
    <React.Fragment>
      <AppBar>
        <Typography>
          You can also try my <Link to="/">bookmarks!</Link>
        </Typography>
      </AppBar>
      <Box
        sx={{ background: "linear-gradient(red,blue,yellow)" }}
        marginTop={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1" fontSize={120}>
          {counter}
        </Typography>
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
            variant="outlined"
            onClick={() => setCounter((prevCount) => prevCount - 1)}
          >
            Minus
          </Button>
          <Button
            variant="outlined"
            onClick={() => setCounter((prevCount) => prevCount + 1)}
          >
            Plus
          </Button>
        </ButtonGroup>
      </Box>
    </React.Fragment>
  );
}
