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
    
    svg {
        font-size:2vw;
    }
`;

const generateBgColor = () => {
    return `hsl(${Math.floor(Math.random() * (255))}, ${Math.floor(Math.random() * (100))}%, ${Math.floor(Math.random() * (100))}%)`;
}

interface Props {
    count: number;
    colors: string[];
    setColors:React.Dispatch<React.SetStateAction<string[]>>;
    onCheckBtnClick: () => void;
    onDeleteBtnClick: () => void;
}

const Color = ({count, colors, setColors, onCheckBtnClick, onDeleteBtnClick}:Props) => {
    const [color, setColor] = useState(generateBgColor());

    useEffect(() => {
        const _colors = colors;
        _colors.push(color);
        setColors(_colors);
    },[color]);

    const onRotateBtnClick = (event:React.MouseEvent) => {
        event.preventDefault();
        const newColor = generateBgColor();
    }
    return(
        <Content width={100 / count} bgColor={color}>
            <FontAwesomeIcon icon={faBars} />
            <FontAwesomeIcon onClick={onRotateBtnClick} icon={faRotateRight} />
            <FontAwesomeIcon onClick={onCheckBtnClick} icon={faCheck} />
            <FontAwesomeIcon onClick={onDeleteBtnClick} icon={faX} />
        </Content>
    )
}

export default Color;