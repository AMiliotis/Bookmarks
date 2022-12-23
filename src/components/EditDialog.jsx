import { Dialog } from "@mui/material";
import React from "react";
import BookmarkDialog from "./shared/BookmarkDialog";

export default function EditDialog({
  setBookmark,
  bookmark,
  openEdit,
  setOpenEdit,
  setBookmarkList,
  bookmarkList,
}) {
  function handleCloseEdit() {
    setOpenEdit(false);
  }

  function editBookmark(id) {
    setBookmarkList(
      bookmarkList.map((bookm) => {
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
      <BookmarkDialog
        title="Edit your bookmark"
        contentText="Please add a Bookmark title, some text and choose what type it is"
        buttonText="Edit"
        handleClose={handleCloseEdit}
        handleCreateOrEdit={() => editBookmark(bookmark.id)}
        setBookmark={setBookmark}
        bookmark={bookmark}
      />
    </Dialog>
  );
}
