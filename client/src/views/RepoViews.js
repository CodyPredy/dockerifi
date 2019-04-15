import React, { useState } from "react";
import { http } from "../api/http";

import styled from "styled-components";
import logo from "../logo.svg";
import PanelContainer from "../components/PanelContainer";

function RepoViews() {
  const [content, setData] = useState([]);
  const [author, setAuthor] = useState("");
  const [isLoading, setLoading] = useState(false);

  async function fetchData(author) {
    const result = await http.get(`/api/${author}`);
    setData(result.data);
    setLoading(false);
  }

  function onAuthorSubmit(e) {
    if (e.charCode === 13) {
      fetchData(author);
    }
  }

  function onRepoSubmit() {
    setLoading(true);
    fetchData(author);
  }

  function renderUserInput() {
    return (
      <RepoInput>
        <input
          value={author}
          onChange={e => {
            setAuthor(e.target.value);
          }}
          onKeyPress={e => onAuthorSubmit(e)}
        />
        <button onClick={onRepoSubmit} disabled={!author}>
          GO
        </button>
      </RepoInput>
    );
  }

  return (
    <div>
      {renderUserInput()}
      {isLoading ? (
        <img src={logo} className="App-logo" alt="logo" />
      ) : (
        <PanelContainer content={content} />
      )}
    </div>
  );
}

const RepoInput = styled.div`
  input {
    padding: 0 15px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
  }

  button {
    margin-left: 25px;
    width: 50px;
    height: 50px;
    background: #de3131;
    font-weight: bold;
    color: white;
    font-size: 20px;
    border-radius: 50%;

    &:disabled {
      background: grey;
    }
  }
`;

export default RepoViews;
