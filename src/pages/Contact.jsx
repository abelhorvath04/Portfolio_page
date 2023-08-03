import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom'
import ContactToaster from '../components/ContactToaster';

export default function Contact() {

  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({})
  const [response, setResponse] = useState({})
  const navigate = useNavigate();

  function navigateMain() {
    navigate("/")
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      setShow(true);
      const formData = new FormData(form);
      formData.set('message', data.message)

      const urlEncodedData = new URLSearchParams(formData).toString();

      fetch('./mail/send.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlEncodedData
      })
        .then(res => res.json())
        .then(res => {
          setResponse(res)
        })
      setTimeout(navigateMain, 4000);
    }
    setValidated(true);
  };

  return (
    <>
      <ContactToaster show={show} setShow={setShow} data={data} />
      <div className="container contactOpacity">
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12 col-md-10 col-lg-8">
            <div className="card">
              <div className="card-header bg-primary text-white">Contact me!</div>
              <div className="card-body">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="John Doe"
                        name="name"
                        onChange={handleChange}
                        value={data.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please add your name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        onChange={handleChange}
                        name="email"
                        placeholder="name@example.com"
                        value={data.email}
                        required />
                      <Form.Control.Feedback type="invalid">
                        Please write a valid e-mail.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="subject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={handleChange}
                        name="subject"
                        value={data.subject}
                        placeholder="About"
                        required />
                      <Form.Control.Feedback type="invalid">
                        Please add a subject.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea"
                        rows={3}
                        onChange={handleChange}
                        name="message"
                        value={data.message}
                        placeholder='Write your message!'
                        required />
                      <Form.Control.Feedback type="invalid">
                        Are you sure you want to send without a message?
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Button type="submit" variant="success">Send me</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}