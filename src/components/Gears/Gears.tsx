import React from 'react';
import Lottie from 'react-lottie';
import Styles from './Gears.module.scss';
import animationData from '../../assets/lottie/geegrs-animation.json';

const Component: React.FC = (): JSX.Element => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <div className={Styles.container}>
            <Lottie options={defaultOptions} />
        </div>
    );
};

export default Component;
