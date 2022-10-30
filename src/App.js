import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display:flex;
  height:50vh;
  width:50vw;

  justify-content:center;
  align-items:center;

  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <h1>Test</h1>
    </Wrapper>
  );
}

export default App;
