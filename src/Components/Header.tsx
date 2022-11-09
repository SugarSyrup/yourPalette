import React from 'react';
import styled from 'styled-components';

interface Props {
    changeColor: () => void;
}

const Container = styled.header`
    width:100vw;
    height:10vh;
    margin:0;
    background-color: transparent;
    /* background-color: ${(props) => props.theme.bgColor};*/
    color: ${(props) => props.theme.textColorP}; 

    display:flex;
    justify-content:space-around;
    align-items:center;
`;

const Logo = styled.span`
    font-weight:bolder;
    font-size:30px;
`;

const ThemeChangeBTN = styled.button`
    width:50px;
    height:25px;
    background-color: ${(props) => props.theme.buttonColor};
`;

const Header = ({ changeColor }:Props) => {
    return(
        <Container>
            <Logo>Palette</Logo>
            <ThemeChangeBTN onClick={changeColor}/>
        </Container>
    );
}

export default Header;