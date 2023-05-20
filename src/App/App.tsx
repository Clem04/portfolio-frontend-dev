import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
`
const Content = styled.div`
  width: 80vw;
  border: 1px solid ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
`
const HeaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  background-color: ${(props) => props.theme.colors.primary};
  z-index: -1;
`

function App() {
  return (
      <AppContainer>
        <HeaderContainer />
        <Content>
          Hello this is Clem Portfolio
        </Content>
      </AppContainer>
  );
}

export default App;
