import React, { useContext, useState } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './NavBar.css'
import SearchBox from './SearchBox'
import {Context} from '../index'
export default function NavBar() {
    let data = useContext(Context)
    console.log(data)
  return (
    <Container className='myNavBar' fluid>
        <Row>
            <Col className='left_Side' xs={8}>
                logo
            </Col>
            <Col xs={4}>
                <Container>
                    <Row>
                        <Col xs={6}><SearchBox/></Col>
                        <Col xs={2}>Home</Col>
                        <Col xs={2}>About</Col>
                        <Col xs={2}>Contact</Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    </Container>
  )
}
