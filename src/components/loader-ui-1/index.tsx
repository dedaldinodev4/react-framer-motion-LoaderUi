import React from 'react';
import { motion, useCycle } from 'framer-motion';
import { Loader, Variants, ButtonCycle } from './style';

export const LoaderUI1 = () => {
    const [animation, setAnimation] = useCycle("animationOne", "animationTwo", "animationThree");

    return (
        <Loader>
            <motion.div
                className='loader-ui-1'
                variants={Variants}
                animate={animation}
                exit="exit"
            >

            </motion.div>
            <ButtonCycle onClick={() => setAnimation()}>Next</ButtonCycle>
        </Loader>
    );
}