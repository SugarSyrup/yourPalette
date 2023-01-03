import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width:100vw;
    height:10vh;
    margin:0;
    transition:0.5s;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColorH};

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
`;

export const Logo = styled.span`
    font-size:30px;
    font-weight:bolder;
    margin-left:30px;
`;

export const ButtonContainer = styled.div`
    svg{
        width:40px;
        height:40px;
        cursor:pointer;
    }
    svg:nth-child(1){
        margin-right:15px;
    }
    svg:nth-child(2){
        margin-right:20px;
    }
`