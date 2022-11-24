import React from 'react';

const BookingCategory = ({booking}) => {
    const {name} = booking;
    return (
        <div>
            <button className="btn btn-success">{name}</button>
        </div>
    );
};

export default BookingCategory;