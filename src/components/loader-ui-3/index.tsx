import React from 'react';
import { motion } from 'framer-motion';
import { Container, BoucingLoader,
        Transition, Animate } from './styles';


export const BounceBall = () => {
    return (
        <Container>
            <motion.span 
                style={BoucingLoader}
                transition={Transition}
                animate={Animate}
            />
        </Container>
    )
}

