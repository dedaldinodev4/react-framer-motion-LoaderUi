import { MotionStyle } from "framer-motion";
import styled from 'styled-components';


export const Container = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
`;

export const BoucingLoader: MotionStyle = {
    display: "block",
    width: "1rem",
    height: "1rem",
    backgroundColor: "black",
    borderRadius: "0.5rem"
}

export const Transition = {
    y: {
        duration: 0.4,
        yoyo: Infinity,
        ease: "easeOut"
    },
    backgroundColor: {
        duration: 0,
        yoyo: Infinity,
        ease: "easeOut",
        repeatDelay: 0.8
    }
}

export const Animate = {
    y: ["100%", "-100%"],
    backgroundColor: ["#ff6699", "#6666ff"]
}