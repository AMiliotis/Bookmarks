import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

export default function BookmarkDialog({
  title,
  contentText,
  buttonText,
  handleClose,
  handleCreateOrEdit,
  setBookmark,
  bookmark,
}) {
  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{contentText}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          onChange={(e) => setBookmark({ ...bookmark, title: e.target.value })}
          value={bookmark.title}
          label="Bookmark Title"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          autoFocus
          margin="dense"
          id="content"
          onChange={(e) =>
            setBookmark({ ...bookmark, content: e.target.value })
          }
          value={bookmark.content}
          label="Add information about this bookmark"
          type="text"
          fullWidth
          variant="outlined"
        />
        <FormControl fullWidth>
          <InputLabel id="bookmark-type">Type</InputLabel>
          <Select
            labelId="bookmark-type"
            id="bookmark-type-select"
            onChange={(e) => setBookmark({ ...bookmark, type: e.target.value })}
            value={bookmark.type}
            label="Type"
          >
            <MenuItem value={"Work"}>Work</MenuItem>
            <MenuItem value={"Leisure"}>Leisure</MenuItem>
            <MenuItem value={"Personal"}>Personal</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleCreateOrEdit}>{buttonText}</Button>
      </DialogActions>
    </>
  );
}
