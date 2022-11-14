import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRotateRight, faCheck, faX } from '@fortawesome/free-solid-svg-icons';

const Content = styled.div<{width:number; bgColor:string}>`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;

    height:100%;
    width:${(props) => props.width || 50}%;
    background-color:${(props) => props.bgColor};
`;

const generateBgColor = () => {
    return `hsl(${Math.floor(Math.random() * (255))}, ${Math.floor(Math.random() * (100))}%, ${Math.floor(Math.random() * (100))}%)`;
}

interface Props {
    count: number;
    colors: string[];
    setColors:React.Dispatch<React.SetStateAction<string[]>>;
}

const Color = ({count, colors, setColors}:Props) => {
    const [color, setColor] = useState(generateBgColor());
    useEffect(() => {
        const _colors = colors;
        _colors.push(color);
        setColors(_colors);
    },[color]);
    return(
        <Content width={100 / count} bgColor={color}>
            <FontAwesomeIcon icon={faBars} />
            <FontAwesomeIcon icon={faRotateRight} />
            <FontAwesomeIcon icon={faCheck} />
            <FontAwesomeIcon icon={faX} />
        </Content>
    )
}

export default Color;