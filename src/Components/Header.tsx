import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { isDarkMode } from '../atoms';
import { useRecoilState } from 'recoil';

const Container = styled.header`
    width:100vw;
    height:10vh;
    margin:0;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColorH};

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
`;

const Logo = styled.span`
    font-size:30px;
    font-weight:bolder;

    color: ${(props) => props.theme.textColorH};
`;

const ButtonContainer = styled.div`
    svg{
        width:40px;
        height:40px;
    }
`

const Header = () => {
    const [_isDarkMode, _setDarkMode] = useRecoilState(isDarkMode);

    return(
        <Container>
            <Logo>YourPallete</Logo>
            <select>
                <option value="">--Please choose an Theme--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>
            <ButtonContainer>
                {_isDarkMode ? 
                    <FontAwesomeIcon icon={ faSun } onClick={() => _setDarkMode(prev => !prev)} /> 
                    : <FontAwesomeIcon icon={ faMoon } onClick={() => _setDarkMode(prev => !prev)} />
                }                    
            </ButtonContainer>
        </Container>
    );
}

export default Header;