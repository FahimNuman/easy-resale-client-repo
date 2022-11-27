import React, { useState } from 'react';
import AbailableBooking from './AbailableBooking';
import BookingAppointment from './BookingAppointment';


const Booking = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div className='
        mx-5'>
            <BookingAppointment selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <AbailableBooking selectedDate={selectedDate} />
           
        </div>
    );
};

export default Booking;