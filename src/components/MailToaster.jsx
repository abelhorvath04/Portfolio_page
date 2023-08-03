import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function ContactToaster({ setShow, show }) {

    return (
        <ToastContainer className="positionedToaster">
            <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={3000}
                autohide
            >
                <Toast.Header className="bg-secondary">
                    <strong className="me-auto">Ábel</strong>
                    <small className="text-muted">- just now -</small>
                </Toast.Header>
                <Toast.Body className='bg-light'>
                    My mail address is on your clipboard now!
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}
