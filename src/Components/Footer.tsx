import React from 'react';
import styled from 'styled-components';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Container = styled.footer`
    width:100vw;
    height:10vh;
    margin:0;
    background-color: ligthgrey;
`;

const MadeBy = styled.span`
    
`;

const LinkIcon = styled.div`

`;

const Footer = () => {
    return(
        <Container>
            <LinkIcon>
                <FontAwesomeIcon icon={faGithub} />
            </LinkIcon>
            <LinkIcon>Mail</LinkIcon>
            <MadeBy>@ruswkdbs</MadeBy>          
        </Container>
    );
}

export default Footer;