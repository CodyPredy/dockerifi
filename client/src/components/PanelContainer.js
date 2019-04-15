import React from "react";
import styled from "styled-components";

import Panel from "./Panel";

function PanelContainer({ content = [] }) {
  return !content.length ? (
    <NoContent>Repo man is not here</NoContent>
  ) : (
    <Container>
      {content.map((panelProps, index) => (
        <Panel key={`${panelProps.name}${index}`} {...panelProps} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const NoContent = styled.div`
  margin-top: 50px;
`;

export default PanelContainer;
