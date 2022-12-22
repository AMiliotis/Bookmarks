import { Badge, Chip, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function Chips({
  numOfLeisureBm,
  numOfPersonalBm,
  numOfWorkBm,
}) {
  return (
    <Stack
      sx={{ bgcolor: "lightgray" }}
      borderRadius={4}
      boxShadow={"5px 5px 10px black"}
      margin="auto"
      padding={3}
      marginTop={2}
      marginLeft={2}
      marginRight={2}
      direction="row"
      justifyContent={"space-around"}
      alignItems="center"
      spacing={1}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Badge badgeContent={numOfWorkBm} color="primary">
        <Chip label="Work" />
      </Badge>
      <Badge badgeContent={numOfLeisureBm} color="primary">
        <Chip label="Leisure" />
      </Badge>
      <Badge badgeContent={numOfPersonalBm} color="primary">
        <Chip label="Personal" />
      </Badge>
    </Stack>
  );
}
