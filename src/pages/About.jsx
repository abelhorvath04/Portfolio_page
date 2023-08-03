import React from 'react'
import AboutText from '../components/AboutText'
import AboutTextMain from '../components/AboutTextMain'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function About() {
  return (
    <Container>
      <Row>
        <Col>
          <AboutTextMain />
          <AboutText />
        </Col>
      </Row>
    </Container>
  )
}
