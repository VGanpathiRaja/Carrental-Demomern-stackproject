import React from 'react';
import './Pages.css';
import Breadcrum from '../Components/Breadcum';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import { IoSettingsOutline } from "react-icons/io5";

const Aboutsection =styled.section`
`;
const Aboutpart=styled.section`
  padding: 75px 0;
`;
const Boxabout =styled.div`
  padding:50px 15px;
  margin: 10px 0;
  background-color: #F2F2F2;
  border: 1px solid #333;
  display: flex;
  justify-content: space-around;
  align-items:center;
`;
export default function About() {
  return (
    <Aboutsection>
        <Breadcrum Title='About' Breadlink_1="Home" Breadlink_2="About"  />
        <Aboutpart>
        <Container>
            <Row>
                <Col md={12} className='text-center'>
                    <h1>About our Services</h1>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                      <Boxabout className='about-box'>
                          <div className='icon'><IoSettingsOutline /></div>
                          <div>
                              <h1>Expert Workers</h1>
                              <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                                <Link>Read More</Link>
                          </div>
                      </Boxabout>
                </Col>
                <Col md={4}>
                      <Boxabout className='about-box'>
                          <div className='icon'><IoSettingsOutline /></div>
                          <div>
                              <h1>Expert Workers</h1>
                              <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                                <Link>Read More</Link>
                          </div>
                      </Boxabout>
                </Col>
                <Col md={4}>
                      <Boxabout className='about-box'>
                          <div className='icon'><IoSettingsOutline /></div>
                          <div>
                              <h1>Expert Workers</h1>
                              <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                                <Link>Read More</Link>
                          </div>
                      </Boxabout>
                </Col>
            </Row>
        </Container>
        </Aboutpart>
    </Aboutsection>
  )
}
