import styled from "styled-components";
import { MotionStyle } from "framer-motion";

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
    exit: {
        x: '-100vw',
        opacity: 0
    }
} 


export const Loader = styled.div`
    width: 100%;
    height: 200px;
    justify-content: center;
    align-content: center;
    text-align: center; 
    align-items: center;
    justify-items: center;
  
`;

export const ItemLoader:MotionStyle = {
    width: "1rem",
    height: "1rem",
    borderRadius: "0.5rem",
    background: "#BD34FE"
}

export const NextButton= styled.a`
margin: 80px 0;
position: fixed;
padding: 10px;
margin-left: -10px;
font-weight: bold;
text-transform: uppercase;
text-align: center;
text-decoration: none;
display: block;
font-size: 14px;
cursor: pointer;
border: none;
border-radius: 4px;
background: ${props =>  props.theme.colors.fourth};
color: #fff;
&:hover {
    transform: scale(0.9);
}
`;



