import React, { useState, useEffect } from "react";
import { http } from "../api/http";

function Hello() {
  const [content, setData] = useState("");

  async function fetchData() {
    const result = await http.get("/api");

    setData(result.data.content);
  }

  // TODO this throws a warning "Warning: An effect function must not return anything besides a function, which is used for clean-up."
  useEffect(async () => {
    fetchData();
  }, []);

  return <h1>{content}</h1>;
}

export default Hello;
