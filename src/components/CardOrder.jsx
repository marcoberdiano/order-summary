import React from 'react';
import hero from '../images/illustration-hero.svg';
import CardBody from './CardBody';

const CardOder = () => {
    return ( 
        <div className="card-container">

            <div className='card-img-container'>
                <img className='hero-img' src={hero} alt='hero' />
            </div>

            <CardBody/>

        </div>
     );
}
 
export default CardOder;