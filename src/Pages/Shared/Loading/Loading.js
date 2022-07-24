import React from 'react';
import { ButtonGroup, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: "400px" }} className='w-100 d-flex align-items-center justify-content-center align-self-center'>
            <ButtonGroup variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    role="status"
                    aria-hidden="true"
                />
                <span className="ms-2 fs-3">Loading...</span>
            </ButtonGroup>
        </div>
    );
};

export default Loading;