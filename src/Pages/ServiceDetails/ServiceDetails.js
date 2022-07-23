import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceID} = useParams();
    return (
        <div className="text-center my-5">
            <h2>Welcome to details : {serviceID}</h2>
        </div>
    );
};

export default ServiceDetails;