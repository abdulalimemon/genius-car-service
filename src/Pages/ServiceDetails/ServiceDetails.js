import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceID} = useParams();
    return (
        <div className="text-center my-5">
            <h2>Welcome to details : {serviceID}</h2>
            <div>
                <Link to="/checkout"><Button className="btn btn-primary">Check Out</Button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;