import React from 'react';

const AppointmentOption = ({ product, setTreatment }) => {
    const { name, price,slot } = product;
    console.log(product)
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <h2 className="text-2xl text-secondary font-bold text-center">{price}</h2>
               
                {/* <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p> */}
                <div className="card-actions justify-center">
                    <label
                        // disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(product)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;