import React, { useEffect, useState } from "react";
import Counter from "../components/Counter";

export default function Page2() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const data = window.localStorage.getItem("MY_COUNTER");
    console.log(JSON.parse(data));
    if (data !== null) setCounter(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("MY_COUNTER", JSON.stringify(counter));
  }, [counter]);

  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
    </>
  );
}
