import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';
import Button from 'react-bootstrap/Button';
import { useNavigate} from 'react-router';


const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <Col>
            <Card>
                <Card.Img src={img} variant="top" alt="Services" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price : ${price}</Card.Text>
                    <Card.Text><small>{description}</small></Card.Text>
                    <Button onClick={() => navigateToServiceDetail(_id)} variant="primary" className="w-100">Book : {name}</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;