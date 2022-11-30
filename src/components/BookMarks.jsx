import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotesIcon from "@mui/icons-material/Notes";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BookMarks({
  accrdArray,
  setOpenEdit,
  setBookmark,
  setAccrdArray,
}) {
  const handleEdit = (i) => {
    setOpenEdit(true);
    setBookmark(accrdArray[i]);
  };

  const handleDelete = (index) => {
    accrdArray.splice(index, 1);
    setAccrdArray([...accrdArray]);
  };

  return (
    <Stack
      margin="auto"
      marginTop={5}
      direction="row"
      justifyContent={"space-evenly"}
      alignItems="baseline"
    >
      {accrdArray.map((bookm, i) => (
        <Accordion key={bookm.id} sx={{ bgcolor: "whitesmoke" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{bookm.title}</Typography>
          </AccordionSummary>
          <Divider>Details</Divider>
          <AccordionDetails>
            <Typography variant="p">
              <NotesIcon
                color="secondary"
                sx={{ marginRight: 1, marginBottom: -1 }}
              />
              {bookm.content}
            </Typography>
            <Divider />
            <Typography variant="p">
              <InfoIcon
                color="info"
                sx={{ marginRight: 1, marginBottom: -1 }}
              />
              {bookm.type}
            </Typography>
          </AccordionDetails>
          <Tooltip title="Edit Bookmark">
            <IconButton onClick={() => handleEdit(i)}>
              <EditIcon fontSize="large" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete Bookmark">
            <IconButton onClick={() => handleDelete(i)}>
              <DeleteIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Accordion>
      ))}
    </Stack>
  );
}