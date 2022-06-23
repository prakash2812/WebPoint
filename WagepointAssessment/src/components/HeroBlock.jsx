import React from 'react';
import '../css/HeroBlock.css';
import coffee from '../assests/coffee.jpg';
import cofee1 from '../assests/coffee1.jpg';
const HeroBlock = () => {
    return (
        <div className='hero-block'>
            <p>
                <img loading='lazy' src={coffee} alt='coffee' />
            </p>
            <p>
                <img loading='lazy' src={cofee1} alt='cofee' />
            </p>
        </div>
    );
};

export default HeroBlock;
