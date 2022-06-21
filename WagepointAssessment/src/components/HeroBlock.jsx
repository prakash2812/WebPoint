import React from 'react';
import '../css/HeroBlock.css';
import coffee from '../assests/coffee.jpg';
import cofee1 from '../assests/coffee1.jpg';
const HeroBlock = () => {
    return (
        <div className='hero-block'>
            <p>
                <img src={coffee} />
            </p>
            <p>
                <img src={cofee1} />
            </p>
        </div>
    );
};

export default HeroBlock;
