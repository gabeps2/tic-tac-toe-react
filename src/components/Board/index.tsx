import React from "react";

import { Container, Content, Button, ContentButtons } from "./styles";
import { Cell } from "../Cell";

const Board: React.FC = () => {
  return (
    <Container>
      <ContentButtons>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </ContentButtons>
      <Content>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
      </Content>
      <ContentButtons>
        <Button></Button>
      </ContentButtons>
    </Container>
  );
};

export default Board;
