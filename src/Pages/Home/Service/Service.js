import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';
import Button from 'react-bootstrap/Button';


const Service = ({ service }) => {
    const { name, price, description, img } = service;

    return (
        <Col>
            <Card>
                <Card.Img src={img} variant="top" alt="Services" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price : ${price}</Card.Text>
                    <Card.Text><small>{description}</small></Card.Text>
                    <Button variant="primary" className="w-100">Book : {name}</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;