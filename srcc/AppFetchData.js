import React, { Component, useState, useEffect } from "react";

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [users, setUsers] = useState({});

  async function fetchData() {
    const res = await fetch("https://randomuser.me/api/");
    res
      .json()
      .then((res) => setUsers(res))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  },[]);

  const usertext = JSON.stringify(users)
  return <div>{usertext}</div>;
};
export default App;
