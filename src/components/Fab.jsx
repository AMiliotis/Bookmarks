import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

let nextId = 0;

export default function FloatAB({
  bookmark,
  setBookmark,
  accrdArray,
  setAccrdArray,
}) {
  const [open, setOpen] = useState(false);

  function handleOpenCreateBookmark() {
    setOpen(true);
  }

  function handleCloseCreateBookmark() {
    setBookmark({
      ...bookmark,
      title: "",
      content: "",
      type: "",
    });
    setOpen(false);
  }

  const createBookmark = (e) => {
    e.preventDefault();
    setAccrdArray([
      ...accrdArray,
      {
        id: nextId,
        title: bookmark.title,
        content: bookmark.content,
        type: bookmark.type,
      },
    ]);

    setBookmark({
      ...bookmark,
      title: "",
      content: "",
      type: "",
    });
    console.log(nextId);
    nextId++;
    console.log(nextId);

    setOpen(false);
  };

  return (
    <Box
      bottom={0}
      right={0}
      marginRight={10}
      marginBottom={10}
      position={"absolute"}
    >
      <Fab
        variant="extended"
        sx={{ color: "lightcoral" }}
        onClick={handleOpenCreateBookmark}
      >
        <BookmarkAddIcon fontSize="large" />
        Create
      </Fab>

      <Dialog open={open} onClose={handleCloseCreateBookmark}>
        <DialogTitle>Create a new bookmark</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add a Bookmark title, some text and choose what type it is
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            onChange={(e) =>
              setBookmark({ ...bookmark, title: e.target.value })
            }
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
              onChange={(e) =>
                setBookmark({ ...bookmark, type: e.target.value })
              }
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
          <Button onClick={handleCloseCreateBookmark}>Cancel</Button>
          <Button onClick={createBookmark}>Create</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
