import styled from 'styled-components';

export const FooterContainer = styled.footer`
width:100vw;
height:5vh;
margin:0;

transition:0.5s;
background-color: ${(props) => props.theme.bgColor};
color: ${(props) => props.theme.textColorH};

display:flex;
justify-content:flex-end;
align-items: center;

svg{
    width:25px;
    height:25px;
    margin-right:20px;
}
`;