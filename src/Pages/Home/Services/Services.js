import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {

    const [services] = useServices();

    return (
        <div className="container my-5" id="service">
            <h2 className="text-center pt-1 pb-5 text-primary fs-1">Our Services</h2>
            <Row xs={1} md={2} lg={3} className="g-4">{
                services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
            </Row>
        </div>
    );
};

export default Services;