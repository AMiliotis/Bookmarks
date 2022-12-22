import React, { useState } from "react";
import Header from "../components/Header";
import Chips from "../components/Chips";
import BookMarks from "../components/BookMarks";
import EditDialog from "../components/EditDialog";
import CreateBookmarkButton from "../components/Fab";

let initialArray = [];

export default function Home() {
  const [bookmark, setBookmark] = useState({
    id: "",
    title: "",
    content: "",
    type: "",
  });

  const [bookmarkList, setBookmarkList] = useState(initialArray);
  const [openEdit, setOpenEdit] = useState(false);

  let numOfWorkBm = 0;
  let numOfLeisureBm = 0;
  let numOfPersonalBm = 0;

  for (const bookm of bookmarkList) {
    if (bookm.type === "Work") numOfWorkBm++;
    else if (bookm.type === "Personal") numOfPersonalBm++;
    else if (bookm.type === "Leisure") numOfLeisureBm++;
  }

  return (
    <React.Fragment>
      {" "}
      <Header />
      <Chips
        numOfLeisureBm={numOfLeisureBm}
        numOfPersonalBm={numOfPersonalBm}
        numOfWorkBm={numOfWorkBm}
      />
      <CreateBookmarkButton
        bookmark={bookmark}
        setBookmark={setBookmark}
        bookmarkList={bookmarkList}
        setBookmarkList={setBookmarkList}
      />
      <BookMarks
        bookmarkList={bookmarkList}
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        setBookmark={setBookmark}
        setBookmarkList={setBookmarkList}
      />
      <EditDialog
        openEdit={openEdit}
        setBookmark={setBookmark}
        bookmark={bookmark}
        setOpenEdit={setOpenEdit}
        bookmarkList={bookmarkList}
        setBookmarkList={setBookmarkList}
      />
    </React.Fragment>
  );
}
