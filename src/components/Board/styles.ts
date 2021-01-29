import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 10px;
`;

export const Button = styled.button`
  width: 26.125vh;
  height: 26.125vh;

  max-width: 150px;
  max-height: 150px;

  background-color: #eb404f;
  border: 0;

  margin: 10px;
`;

export const Content = styled.div`
  width: 95vh;
  height: 95vh;

  max-width: 600px;
  max-height: 600px;

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  background: #fff;
`;

export const Cell = styled.div`
  width: 26.125vh;
  height: 26.125vh;

  max-width: 150px;
  max-height: 150px;

  margin: 1.754vh;

  background-color: #eb404f;
`;
