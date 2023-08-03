import React from 'react'
import { Display, CalcButtons } from './Calculate'
import { Col } from 'react-bootstrap'

export default function Calculator() {
  return (
    <div className='calcSize'>
    <div className='container calcBox'>
        <Display />
        <CalcButtons />
    </div>
    </div>
  )
}
