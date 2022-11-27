import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';

import BookingOption from './BookingOption';

const AbailableBooking = ({ selectedDate }) => {
    const [AbailableBookings, setAbailableBooking] = useState([])
    const [bookinProduct, setBookinProduct] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAbailableBooking(data))
    }, [])
    console.log(AbailableBookings)
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    AbailableBookings.map(booking => <BookingOption
                        key={booking._id}
                        booking={booking}
                        setBookinProduct={setBookinProduct}
                    ></BookingOption>)
                }
            </div>
            {
                bookinProduct &&
                <BookingModal
                    selectedDate={selectedDate}
                    bookinProduct={bookinProduct}
                    setBookinProduct={setBookinProduct}
                ></BookingModal>
            }
            
              
                
            
        </section>
    );
};

export default AbailableBooking;