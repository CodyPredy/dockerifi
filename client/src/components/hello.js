import React, { useState, useEffect } from "react";
import axios from "axios";

function Hello() {
  const [content, setData] = useState("");

  async function fetchData() {
    const result = await axios("http://localhost:3001");

    setData(result.data.content);
  }

  useEffect(async () => {
    fetchData();
  }, []);

  return <h1>{content}</h1>;
}

export default Hello;
