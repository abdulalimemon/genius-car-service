import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-center">{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Expert;