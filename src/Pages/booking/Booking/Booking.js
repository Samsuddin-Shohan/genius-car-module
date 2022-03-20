import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Booking = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>This is Booking {serviceId}</h1>
        </div>
    );
};

export default Booking;