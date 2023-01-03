import React from 'react';
import styled from 'styled-components';

import { settingColors } from '../atoms';
import { useRecoilValue } from 'recoil';

import Color from './Color';

const Container = styled.div`
    height: 85vh;
    width:100vw;
    margin:0;
`;

const Main = () => {
    const _settingColors = useRecoilValue(settingColors);
    _settingColors.forEach((color) => {console.log(color)});
    return(
        <Container> 
            {
                _settingColors.map((_settingColor) => (
                    <Color {..._settingColor} />
                ))
            }
        </Container>
    );
}

export default Main;