import React from 'react'
import alap from '../components/Images/alap.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MainText from '../components/MainText'
import MeContact from '../components/MeContact'

export default function Main() {
  return (
    <Container className="justify-content-between">
      <Row className="mt-1">
        <Col className="mb-2">
          <MainText />
          <br />
          <MeContact />
        </Col>
        <Col className='text-center'>
          <img className="port_img" src={alap} alt="portfolio" />
        </Col>
      </Row>
    </Container>
  )
}
