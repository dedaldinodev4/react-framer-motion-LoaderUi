import React from 'react';
import { motion, useCycle } from 'framer-motion';
import { Loader, Variants, ItemLoader, NextButton } from './style';

export const LoaderUI1 = () => {
    const [animation, setAnimation] = useCycle("animationOne", "animationTwo");

    return (
        <Loader>
            <motion.div
                variants={Variants}
                animate={animation}
                style={ItemLoader}
                exit="exit"
                
            />

            <NextButton
                onClick={() => setAnimation()}
            >Next</NextButton>
           
        </Loader>
    );
}