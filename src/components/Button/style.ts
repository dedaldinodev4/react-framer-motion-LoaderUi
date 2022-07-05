import styled from 'styled-components';


export const ButtonCycle = styled.a`
    margin: 30px 0;
    position: fixed;
    left: 50%;
    padding: 10px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 14px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: ${props =>  props.theme.colors.fourth};
    color: #fff;
    &:hover {
        transform: scale(0.9);
    }
`;