import React, { useState, useEffect } from "react";
import { http } from "../api/http";

function Hello() {
  const [content, setData] = useState("");

  async function fetchData() {
    const result = await http.get("/api");

    setData(result.data.content);
  }

  useEffect(async () => {
    fetchData();
  }, []);

  return <h1>{content}</h1>;
}

export default Hello;
