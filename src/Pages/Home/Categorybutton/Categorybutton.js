import React from 'react';
import { Link } from 'react-router-dom';

const Categorybutton = ({category}) => {
    const {name} = category;
    return (
        <div>
            <button className="btn btn-sm"><Link to='/showproduct' >{name}</Link></button>
        </div>
    );
};

export default Categorybutton;