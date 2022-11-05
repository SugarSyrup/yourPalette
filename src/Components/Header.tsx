import React, { SetStateAction, Dispatch } from 'react';
import styled, {DefaultTheme} from 'styled-components';

interface Props {
    setTheme: Dispatch<SetStateAction<boolean>>
}

const Container = styled.header`
    width:100vw;
    height:10vh;
    margin:0;
    background-color: indigo;
`;

const Header = (props:Props) => {
    
    return(
        <Container>

        </Container>
    );
}

export default Header;