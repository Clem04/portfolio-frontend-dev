import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  background-color: ${(props) => props.theme.colors.primary};
  z-index: -1;
`;

export const Content = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.black};
`;