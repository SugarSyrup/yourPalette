import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
    changeColor: () => void;
}

const Container = styled.header`
    width:100vw;
    height:10vh;
    margin:0;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColorH};

    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
`;

const Logo = styled.span`
    font-size:30px;
    font-weight:bolder;

    color: ${(props) => props.theme.textColorH};
`;

const ToneSelector = styled.select`
`;

const ThemeChangeBTN = styled.span`
    margin:10px;
    height:25px;
    background-color: ${(props) => props.theme.buttonColor};
    color: ${(props) => props.theme.textColor};
`;

const RankingBtn = styled(ThemeChangeBTN)``;

const Header = ({ changeColor }:Props) => {
    const [tone, setTone] = useState("")
    const toneSelectorOnChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        setTone(event.target.value);
    }

    return(
        <Container>
            <Logo>YourPallete</Logo>
            <ToneSelector onChange={toneSelectorOnChange}>
                <option value="">--Please choose an Theme--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </ToneSelector>
            <ThemeChangeBTN onClick={changeColor}>ThemeChange</ThemeChangeBTN>
            <RankingBtn>Ranking</RankingBtn>
        </Container>
    );
}

export default Header;