import React from 'react';
import styled from 'styled-components';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Container = styled.footer`
    width:100vw;
    height:10vh;
    margin:0;

    background-color: ligthgrey;

    display:flex;
    justify-content:flex-end;
    align-items: center;

`;

const MadeBy = styled.span`
    margin-right:20px;
    margin-left:30px;
    font-size:24px;
    font-weight:bolder;

    color:${(props) => props.theme.textColorP};
    cursor:pointer;
`;

const LinkIcon = styled.div`

`;

const Footer = () => {
    const onClickGit = (event:React.MouseEvent<HTMLSpanElement>) => {
        window.location.href = "https://naver.com";
    }
    return(
        <Container>
            <LinkIcon>
                <FontAwesomeIcon icon={faGithub} />
            </LinkIcon>
            <LinkIcon>Mail</LinkIcon>
            <MadeBy onClick={onClickGit}>@ruswkdbs</MadeBy>          
        </Container>
    );
}

export default Footer;