import React from "react";
import styled from "styled-components";

function Panel({ name, url, description, clone, ownerAvatar }) {
  return (
    <PanelContent>
      <div className="header">
        <img src={ownerAvatar} alt={name} />
        <a className="panel-url" href={url} alt="avatar">
          {name}
        </a>
      </div>
      <div className="content">
        <h4>
          <a href={clone}>{name}</a>
        </h4>
        <p>{description}</p>
      </div>
    </PanelContent>
  );
}

const PanelContent = styled.div`
  width: 45%;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  background: grey;
  margin: 10px;
  border-radius: 5px;

  h4 {
    font-size: 18px;
    a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
    }
  }

  .header {
    width: 20%;
    position: relative;

    a {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: #000;
      opacity: 0;

      &:hover {
        opacity: 0.1;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .panel-url {
    color: transparent;
  }

  .content {
    text-align: left;
    padding: 15px;
    font-size: 14px;
  }
`;

export default Panel;
