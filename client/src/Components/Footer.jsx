import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiMicrosoftoutlook } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";



const Footersection = styled.section`
    background-color: #138597;
    padding: 75px 0;
`;
const Footbox = styled.div`
    padding: 10px;
    border: 2px solid #fff;
`;
const Foottitle=styled.h1`
    ffont-size: 26px;
    padding: 10px;
    text-align: center;
`;
const Footmenus = styled.div`

`;
const Footicons=styled.li`
    list-style-type: none;
    color: #fff;
    text-decoration: none;
`;


export default function Footer() {
    const [footData, setFootdata] = useState({
        spl: '',
        carspltype: ''
    });

    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const footValidation = footValidates(footData);
        setError(footValidation);
        console.log(footData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFootdata({ ...footData, [name]: value });
    };

    const footValidates = (data) => {
        let errors = {};
        if (!data.carspltype) {
            errors.carspltype = 'Kindly select a car';
        }
        return errors; // Added return statement here
    };
    //  const [footData, setFootdata] = useState({
    //     spl: '',
    //     carspltype: ''
    // });

    // const [error, setError] = useState({});

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const footValidation = footValidates(footData);
    //     setError(footValidation);
    //     console.log(footData);
    // };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFootdata({ ...footData, [name]: value });
    // };

    // const footValidates = (data) => {
    //     let errors = {};
    //     if (!data.carspltype) {
    //         errors.carspltype = 'Kindly select a car';
    //     }
    //     return errors; // Added return statement here
    // };
  return (
    <Footersection>
        <Container>
            <Row>
                <Col md={12}>
                      <Foottitle>Get in Touch !</Foottitle>  
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Footbox>
                    <Form onSubmit={handleSubmit} className='form-part'>
                                <Form.Group className="mb-3">
                                    <Form.Label className='text-white'>Car Details</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name='spl'
                                        id='spl'
                                        placeholder="Enter Car specification"
                                        onChange={handleChange}
                                        value={footData.spl}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className='text-white'>Select Car</Form.Label>
                                    <Form.Select
                                        name='carspltype'
                                        id='carspltype'
                                        onChange={handleChange}
                                        value={footData.carspltype}
                                    >
                                        <option value="">Choose your Car</option>
                                        <option value='BMW'>BMW</option>
                                        <option value='Benz'>Benz</option>
                                        <option value='Audi'>Audi</option>
                                        <option value='Ferrari'>Ferrari</option>
                                    </Form.Select>
                                    {error.carspltype && <span>{error.carspltype}</span>}
                                </Form.Group>

                                <Button type='submit' variant="outline-info" className='w-100 mt-3'>Book Service</Button>
                            </Form>
                    </Footbox>
                </Col>
                <Col md={4}>
                    <Footmenus className='icongruop'>
                    <ul>
                        <li ><Footicons as={Link} to='/'><FaArrowRightLong /><span className='px-3'>Home</span> </Footicons></li>
                        <li><Footicons as={Link} to='/About'><FaArrowRightLong /><span className='px-3'>About</span></Footicons> </li>
                        <li><Footicons as={Link} to='/Services'><FaArrowRightLong /><span className='px-3'>Services</span> </Footicons></li>
                        <li><Footicons as={Link} to='/Blog'><FaArrowRightLong /><span className='px-3'>Blog</span></Footicons> </li>
                        <li><Footicons as={Link} to='/Gallery'><FaArrowRightLong /><span className='px-3'>Gallery</span></Footicons> </li>
                        <li><Footicons as={Link} to='/Contact'><FaArrowRightLong /><span className='px-3'>Contact</span></Footicons> </li>
                    </ul>
                    </Footmenus>
                </Col>

                <Col md={4}>
                    <Footmenus className='icongruop'>
                        <ul>
                            <li><Footicons as={Link} to='#'><FaPhoneAlt /><span className='px-3'>+91 32165 49874 </span> </Footicons></li>
                            <li><Footicons as={Link} to='#'><IoMdMail /><span className='px-3'>carrental@gmail.com </span> </Footicons></li>
                            <li><Footicons as={Link} to='#'><SiMicrosoftoutlook /><span className='px-3'>carrental@outlook.com</span> </Footicons></li>
                            <li><Footicons as={Link} to='#'><FaLocationDot /><span className='px-3'>No 01 Amudha Street,Chennai 6000525 </span> </Footicons></li>
                        </ul>  
                    </Footmenus>       
                </Col>
            </Row>
        </Container>
    </Footersection>
  )
}
