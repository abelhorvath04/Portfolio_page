import React from 'react'
import SkillsText from '../components/SkillsText'
import SkillsTextMain from '../components/SkillsTextMain'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Skills() {
  return (
    <Container>
      <Row>
        <Col>
          <SkillsTextMain />
          <SkillsText />
        </Col>
      </Row>
    </Container>
  )
}
