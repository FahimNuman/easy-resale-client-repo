import React from 'react';
import { Link } from 'react-router-dom';

const BookingCategory = ({book}) => {
    // console.log(book?book:'no data');
    const {name} = book;
    return (
        <div>
            <button className="btn btn-success"><Link to='/allads'
            >{name}</Link></button>
        </div>
    );
};

export default BookingCategory;