import react, {useState}  from "react";
import styled from "styled-components";

const ContentTag = styled.div`
  display:flex;
  height:50vh;
  width:50vw;

  justify-chrome:center;
  align-items:center;

  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Contents = () => {
  const onClickBackground = (event) => {
    console.log(event.target);
  }
  return (
    <ContentTag>
      <div onClick={onClickBackground}></div>    
    </ContentTag>
  );
}

export default Contents;
