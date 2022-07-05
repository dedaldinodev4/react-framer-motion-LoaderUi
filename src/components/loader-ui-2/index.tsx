import React from 'react';
import { motion } from 'framer-motion';
import { ContainerStyle, 
    CircleStyle, spinTransition } from './styles';

export const CircleLoader = () => {

    return (
        <ContainerStyle>
            <motion.span
                style = {CircleStyle}
                animate={{ rotate: 360 }}
                transition={spinTransition}
            />
        </ContainerStyle>
    );
}