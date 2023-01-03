import React from 'react';
import styled from 'styled-components';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
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


const Footer = () => {
    const onClickGit = (event:React.MouseEvent<HTMLOrSVGElement>) => {
        window.location.href = "https://github.com/SugarSyrup";
    }

    return(
        <FooterContainer>
            <FontAwesomeIcon icon={faGithub} onClick={onClickGit}/>      
        </FooterContainer>
    );
}

export default Footer;