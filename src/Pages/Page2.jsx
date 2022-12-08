import React, { useState } from "react";
import Counter from "../components/Counter";

export default function Page2() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
    </>
  );
}
