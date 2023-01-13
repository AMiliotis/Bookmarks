import { Stack } from "@mui/system";
import React from "react";
import AccordionBookmark from "./shared/AccordionBookmark";

export default function BookMarks({
  bookmarkList,
  setOpenEdit,
  setBookmark,
  setBookmarkList,
}) {
  const handleEdit = (i) => {
    setOpenEdit(true);
    setBookmark(bookmarkList[i]);
  };

  const handleDelete = (index) => {
    bookmarkList.splice(index, 1);
    setBookmarkList([...bookmarkList]);
  };

  return (
    <Stack
      alignItems="flex-start"
      direction="row"
      marginLeft={3}
      marginTop={4}
      marginRight={3}
    >
      {" "}
      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        spacing={2}
      >
        {bookmarkList.map((bookm, i) => {
          return bookm.type === "Work" ? (
            <AccordionBookmark
              id={bookm.id}
              title={bookm.title}
              content={bookm.content}
              type={bookm.type}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              i={i}
            />
          ) : (
            console.log("Hello")
          );
        })}
      </Stack>
      <Stack
        margin="auto"
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        {bookmarkList.map((bookm, i) => {
          return bookm.type === "Leisure" ? (
            <AccordionBookmark
              id={bookm.id}
              title={bookm.title}
              content={bookm.content}
              type={bookm.type}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              i={i}
            />
          ) : (
            console.log("Hello")
          );
        })}
      </Stack>
      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-end"
        spacing={2}
      >
        {bookmarkList.map((bookm, i) => {
          return bookm.type === "Personal" ? (
            <AccordionBookmark
              id={bookm.id}
              title={bookm.title}
              content={bookm.content}
              type={bookm.type}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              i={i}
            />
          ) : (
            console.log("Hello")
          );
        })}
      </Stack>
    </Stack>
  );
}
