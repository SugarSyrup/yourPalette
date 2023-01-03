import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { FooterContainer } from './FooterStyle';

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