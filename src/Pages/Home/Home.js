import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';

import Saler from './Saler/Saler';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
           <Category></Category>
            <Saler/>
        </div>
    );
};

export default Home;