import React from 'react';
import styled from 'styled-components';

interface Props {
    changeColor: () => void;
}

const Container = styled.header`
    width:100vw;
    height:10vh;
    margin:0;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColorP};
`;

const ThemeChangeBTN = styled.button`
    width:50px;
    height:25px;
    background-color: ${(props) => props.theme.buttonColor};
`;

const Header = ({ changeColor }:Props) => {
    return(
        <Container>
            <ThemeChangeBTN onClick={changeColor}/>
        </Container>
    );
}

export default Header;