import { Dialog, Fab } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkDialog from "./shared/BookmarkDialog";

let nextId = 0;

export default function CreateBookmarkButton({
  bookmark,
  setBookmark,
  bookmarkList,
  setBookmarkList,
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
    setBookmarkList([
      ...bookmarkList,
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
        <BookmarkDialog
          title="Create a new bookmark"
          contentText="Please add a Bookmark title, some text and choose what type it is"
          buttonText="Create"
          handleClose={handleCloseCreateBookmark}
          handleCreateOrEdit={createBookmark}
          setBookmark={setBookmark}
          bookmark={bookmark}
        />
      </Dialog>
    </Box>
  );
}
