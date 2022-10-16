import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetails = () => {
    const { serviceID } = useParams();
    const [service] = useServiceDetail(serviceID);
    return (
        <div className="text-center my-5">
            <h2>You are about to book : {service.name}</h2>
            <div>
                <h4>{service.description}</h4>
                <p>Price : ${service.price}</p>
                <img src={service.img} alt="Service" />
            </div>
            <Link to={`/checkout/${serviceID}`}><Button className="btn btn-primary my-3">Check Out</Button></Link>
        </div>
    );
};

export default ServiceDetails;