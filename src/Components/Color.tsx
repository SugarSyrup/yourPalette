import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRotateRight, faCheck, faX } from '@fortawesome/free-solid-svg-icons';

import {IColorType, settingColors} from '../atoms';
import { useRecoilValue } from 'recoil';

const Content = styled.div<{width:number; bgColor:string}>`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;

    height:100%;
    width:${(props) => props.width || 50}%;
    background-color:${(props) => props.bgColor};
    
    svg {
        font-size:2vw;
    }
`;

const generateRandomBgColor = ():string => {
    return `hsl(${Math.floor(Math.random() * (255))}, ${Math.floor(Math.random() * (100))}%, ${Math.floor(Math.random() * (100))}%)`;
}

const generateBgColor = (hue:number, saturation:number, lightness:number):string => {
    return `hsl(${hue}%, ${saturation}%, ${lightness}%)`;
}


const Color = ({hue, saturation, lightness}:IColorType) => {
    const getLength = useRecoilValue(settingColors).length;
    return(
        <Content width={getLength + 1 / 100} bgColor={generateBgColor(hue, saturation, lightness)}>
            <FontAwesomeIcon icon={faBars} />
            <FontAwesomeIcon icon={faRotateRight} />
            <FontAwesomeIcon icon={faCheck} />
            <FontAwesomeIcon icon={faX} />
        </Content>
    )
}

export default Color;