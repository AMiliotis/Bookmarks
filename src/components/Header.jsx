import { AppBar, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <React.Fragment>
      {" "}
      <AppBar position="static">
        <Typography variant="h4">ng-bookmarks v0.1.0</Typography>
      </AppBar>
      <Typography variant="h3">Bookmarks List</Typography>
      <Divider />
      <Typography>
        You can also try my <Link to="/counter">counter!</Link>
      </Typography>
    </React.Fragment>
  );
}
