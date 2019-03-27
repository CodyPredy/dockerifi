import React from "react";
import styled from "styled-components";

import Panel from "./Panel";

function List({ items = [] }) {
  return items.length ? (
    <Container>
      {items.map((item, index) => (
        <Panel key={`${item.name}${index}`} {...item} />
      ))}
    </Container>
  ) : (
    <NoContent>Repo man is not here</NoContent>
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

export default List;
