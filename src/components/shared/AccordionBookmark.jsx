import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotesIcon from "@mui/icons-material/Notes";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

export default function AccordionBookmark({
  id,
  title,
  content,
  type,
  handleEdit,
  handleDelete,
  i,
}) {
  return (
    <Accordion key={id} sx={{ bgcolor: "whitesmoke" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <Divider>Details</Divider>
      <AccordionDetails>
        <Typography variant="p">
          <NotesIcon
            color="secondary"
            sx={{ marginRight: 1, marginBottom: -1 }}
          />
          {content}
        </Typography>
        <Divider />
        <Typography variant="p">
          <InfoIcon color="info" sx={{ marginRight: 1, marginBottom: -1 }} />
          {type}
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
  );
}
