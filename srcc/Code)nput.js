import React, { useState } from "react";

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}
export default function App() {
  const [count, setCount] = useState(0);
  const inputProps = useInput();
  const [usename, setUsername] = useState();

  return (
    <>
      <label>Test UseState</label>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <label>{count}</label>
      <input {...inputProps} placeholder="Type in here" />
      <button onClick={() => toalart()}>Alart</button>
      <span>Value: {inputProps.value} </span>

      <input placeholder="Type in here" />

      <input type="text" value={usename} onChange={(e)=> setUsername(e.target.value)} />
      <span>Username: {usename} </span>
    </>
  );
}

function toalart() {
  let xx = prompt("กรอกชื่อ ?");
  alert(xx);
}
