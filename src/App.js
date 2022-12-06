import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Chips from "./components/Chips";
import FloatAB from "./components/Fab";
import BookMarks from "./components/BookMarks";
import EditDialog from "./components/EditDialog";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#091e52",
    },
    secondary: {
      main: "#4d3cc7",
    },
    info: {
      main: "#017f10",
    },
    text: {
      secondary: "black",
    },
    background: {
      default: "red",
      paper: "pink",
    },
  },
});

let initialArray = [];

function App() {
  const [bookmark, setBookmark] = useState({
    id: "",
    title: "",
    content: "",
    type: "",
  });

  const [accrdArray, setAccrdArray] = useState(initialArray);
  const [openEdit, setOpenEdit] = useState(false);

  let numberOfW = 0;
  let numberOfL = 0;
  let numberOfP = 0;

  for (const bookm of accrdArray) {
    if (bookm.type === "Work") numberOfW++;
    else if (bookm.type === "Personal") numberOfP++;
    else if (bookm.type === "Leisure") numberOfL++;
  }

  //Test

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {" "}
        <Header />
        <Chips
          numberOfLBm={numberOfL}
          numberOfPBm={numberOfP}
          numberOfWBm={numberOfW}
        />
        <FloatAB
          bookmark={bookmark}
          setBookmark={setBookmark}
          accrdArray={accrdArray}
          setAccrdArray={setAccrdArray}
        />
        <BookMarks
          accrdArray={accrdArray}
          openEdit={openEdit}
          setOpenEdit={setOpenEdit}
          setBookmark={setBookmark}
          setAccrdArray={setAccrdArray}
        />
        <EditDialog
          openEdit={openEdit}
          setBookmark={setBookmark}
          bookmark={bookmark}
          setOpenEdit={setOpenEdit}
          accrdArray={accrdArray}
          setAccrdArray={setAccrdArray}
        />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
