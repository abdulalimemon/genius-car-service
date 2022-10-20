import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import { useUpdateEmail } from 'react-firebase-hooks/auth';

const Sample = () => {
    const [infos, setInfos] = useState([]);


    useEffect(() => {
        fetch("https://genius-car-server-w5a6.onrender.com/sample")
            .then(res => res.json())
            .then(data => setInfos(data));
    }, []);


    return (
        <div className='container mx-auto py-5'>
            <h2 className='text-center'>Sample Page For Practice.</h2>
            <div>
                <Row>
                    {
                        infos.map(info => <Col key={info._id}>
                            <Card>
                                <Card.Img src={info.img} variant="top" alt="Services" />
                                <Card.Body>
                                    <Card.Title>{info.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default Sample;