import styled from "styled-components";


export const Variants = {
    animationOne: {
        x: [-20, 20],
        y: [0, 30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    },
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    },
    animationThree: {
        y: 0,
        x: [0, -40],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    },
    exit: {
        x: '-100vw',
        opacity: 0
    }
} 


export const Loader = styled.div`
    width: 100%;
    height: 300px;
    justify-content: center;
    align-content: center;
    text-align: center; 
    align-items: center;
    justify-items: center;
  
`;

export const ButtonCycle = styled.button`
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

