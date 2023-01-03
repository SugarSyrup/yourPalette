import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faCrown } from '@fortawesome/free-solid-svg-icons';

import { isDarkMode } from '../atoms';
import { useRecoilState } from 'recoil';

import {HeaderContainer, Logo, ButtonContainer} from './HeaderStyles';

const Header = () => {
    const [_isDarkMode, _setDarkMode] = useRecoilState(isDarkMode);

    return(
        <HeaderContainer>
            <Logo>YourPallete</Logo>
            <ButtonContainer>
                {_isDarkMode ? 
                    <FontAwesomeIcon icon={ faSun } onClick={() => _setDarkMode(prev => !prev)} /> 
                    : <FontAwesomeIcon icon={ faMoon } onClick={() => _setDarkMode(prev => !prev)} />
                }                    
                <FontAwesomeIcon icon={ faCrown } />
            </ButtonContainer>
        </HeaderContainer>
    );
}

export default Header;