import React, {useState} from 'react';
import styled from 'styled-components';

import Color from './Color';

const Container = styled.div`
    height: 85vh;
    width:100vw;
    margin:0;
`;

const Main = () => {
    const [colors, setColors] = useState<string[]>([]);
    const onCheckBtnClick = () => {
        
    }
    const onDeleteBtnClick = () => {

    }
    return(
        <Container> 
            <Color count={colors.length} setColors={setColors} colors={colors} onCheckBtnClick={onCheckBtnClick} onDeleteBtnClick={onDeleteBtnClick}></Color>
        </Container>
    );
}

export default Main;