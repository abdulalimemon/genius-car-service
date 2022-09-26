import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceID } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div className="text-center my-5">
            <h2>You are about to book : {service.name}</h2>
            <div>
                <h4>{service.description}</h4>
                <p>Price : ${service.price}</p>
                <img src={service.img} alt="Service" />
            </div>
            <Link to="/checkout"><Button className="btn btn-primary my-3">Check Out</Button></Link>
        </div>
    );
};

export default ServiceDetails;