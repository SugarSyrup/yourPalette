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
    color: ${(props) => props.theme.textColorP};

    display:flex;
`;

const Logo = styled.span`
    font-size:30px;
    font-weight:bolder;

    color: ${(props) => props.theme.textColorH};
`;

const ToneSelector = styled.select`
    width:200px;
    height:100px;
`;

const ThemeChangeBTN = styled.button`
    margin:10px;
    height:25px;
    background-color: ${(props) => props.theme.buttonColor};
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
            <Logo>Your Pallete</Logo>
            <ToneSelector onChange={toneSelectorOnChange}>
                <option value="">--Please choose an option--</option>
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