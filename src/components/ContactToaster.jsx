import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function ContactToaster({ setShow, show, data }) {

    return (
        <ToastContainer className="positionedToaster">
            <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={3000}
                autohide
            >
                <Toast.Header className="bg-secondary">
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Ábel</strong>
                    <small className="text-muted">- redirecting to main -</small>
                </Toast.Header>
                <Toast.Body className='bg-light'>
                    Thanks {data !== null && data.name}! I'll write you asap.
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}
