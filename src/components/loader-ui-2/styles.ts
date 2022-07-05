import { MotionStyle } from 'framer-motion';
import styled from 'styled-components';

export const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1
} 

export const ContainerStyle = styled.div`
    position: relative;
    width: 3rem;
    height:  3rem ;
    box-sizing:  border-box; 
`;

export const CircleStyle: MotionStyle = {
    display: "block",
    width: "3rem",
    height: "3rem",
    border: "0.5rem solid #e9e9e9",
    borderTop: "0.5rem solid #FFA800",
    borderRadius: "50%",
    position: "absolute",
    boxSizing: "border-box",
    top: 0,
    left: 0
}
