import {
  Button,
  Dialog,
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

export default function EditDialog({
  setBookmark,
  bookmark,
  openEdit,
  setOpenEdit,
  setAccrdArray,
  accrdArray,
}) {
  function handleCloseEdit() {
    setOpenEdit(false);
  }

  function editBookmark(id) {
    setAccrdArray(
      accrdArray.map((bookm) => {
        if (bookm.id === id) {
          return {
            ...bookm,
            title: bookmark.title,
            content: bookmark.content,
            type: bookmark.type,
          };
        } else {
          return bookm;
        }
      })
    );
    setOpenEdit(false);
    setBookmark({
      ...bookmark,
      title: "",
      content: "",
      type: "",
    });
  }

  return (
    <Dialog open={openEdit} onClose={handleCloseEdit}>
      <DialogTitle>Edit your bookmark</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please add a Bookmark title, some text and choose what type it is
        </DialogContentText>
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
        <Button onClick={handleCloseEdit}>Cancel</Button>
        <Button onClick={() => editBookmark(bookmark.id)}>Edit</Button>
      </DialogActions>
    </Dialog>
  );
}
