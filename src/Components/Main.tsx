import React, {useState} from 'react';
import styled from 'styled-components';

import Color from './Color';

const Container = styled.div`
    height: 80vh;
    width:100vw;
    margin:0;
`;

interface Props {
    selectTone: string;
}

const Main = ({selectTone}:Props) => {
    const [colors, setColors] = useState<string[]>([]);
    return(
        <Container> 
            <Color count={colors.length} setColors={setColors} colors={colors}></Color>
        </Container>
    );
}

export default Main;