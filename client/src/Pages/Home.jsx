import React, { useState, useEffect } from 'react';
import './Pages.css';
import styled from 'styled-components';
import axios from 'axios';
import Bgimg from '../Assets/Main-banner.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const Bookingsection = styled.section`
    background-image: url(${Bgimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 90vh;
    padding: 75px 0;
    position: relative;
    z-index: 1;
    color: #fff;
    @media (max-width: 480px) {
      height: inherit;
  }
`;
const Bookinginner =styled.div`
    background-color: #0000008f;
    position: absolute;
    top: 0;
    left: 0;
    height: 90vh;
    width: 100%;
    padding: 75px 0;
    z-index: -1;
    @media (max-width: 480px) {
      height: 100%;
  }
`;
const Title = styled.h1`
  padding:10px;
  font-size: 46px;
  fon-wight: 900;
`;
const Para =styled.p`
  padding:10px;
  font-size: 18px;
`;
const Formpart = styled.div`
 background-color: #05182dba;
 padding: 45px 15px;
  margin: 0;
`;

function Home() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    cartype: '',
    serveDate: '',
    complaints: ''
  });
  const [formErr, setFormErr] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [errors, setErrors] = useState({});
  const [serverResponse, setServerResponse] = useState(null); // To handle server responses

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data before making the request
    const validationErrors = formValidate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set validation errors
      console.log(formData)
      return; // Stop the submission if validation fails
    }

    try {
      const response = await axios.post('http://localhost:4001/service', formData);
      setServerResponse(response.data); // Display the response on success
      setFormData({ fullname: '', email: '', cartype: '', serveDate: '', complaints: '' }); // Reset form
      setErrors({}); // Clear errors
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
      setLoginError(error.response.data.message);
    }
    setFormErr(formValidate(formData));
      setSubmit(true);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((formData) => ({ ...formData, [id]: value }));
  };

  useEffect(() => {
    if (Object.keys(formErr).length === 0 && isSubmit) {
        console.log("No form errors");
    }
  }, [formErr, isSubmit]);

  const formValidate = (data) => {
    let errors = {};
    // if (!data.fullname) errors.fullname = 'Full Name is required.';
    if (!data.email) errors.email = 'Email is required.';
    if (!data.cartype) errors.cartype = 'Car type is required.';
    if (!data.serveDate) errors.serveDate = 'Service date is required.';
    if (!data.complaints) errors.complaints = 'Please describe the complaints.';
    return errors;
  }

  return (
    <section>
      <Bookingsection>
        <Bookinginner />
        <Container>
          <Row>
            <Col md={7}>
              <Title>
                Certified and Award Winning Car Repair Service Provider
              </Title>
              <Para>
                Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum.
                Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut
                dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.
              </Para>
              <Para>
                Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum.
                Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
                Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut
                dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.
              </Para>
            </Col>
            <Col md={5}>
              <Formpart>
                <form onSubmit={handleSubmit} className='form-part'>
                  <Row>
                    <Col md={12} className='text-info text-center'>

                    {loginError && <div className="error">{loginError}</div>}
                    {Object.keys(formErr).length === 0 && isSubmit && (
                        <div className="success">Service Booked Successfully</div>
                    )}

                      <h1>Book Service</h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <label htmlFor="fullname">Full Name</label>
                      <input
                        type='text'
                        name='fullname'
                        id='fullname'
                        placeholder="Enter your Name"
                        className='p-2 w-100'
                        onChange={handleChange}
                        value={formData.fullname} />
                        {errors.fullname && <span>{errors.fullname}</span>}
                    </Col>
                    <Col md={6}>
                      <label htmlFor="email">Email</label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder="Enter your email"
                        className='p-2 w-100'
                        onChange={handleChange}
                        value={formData.email} />
                      {errors.email && <span>{errors.email}</span>}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <label htmlFor="cartype">Select your car</label>
                      <select
                        name='cartype'
                        id='cartype'
                        className='p-2 w-100'
                        onChange={handleChange}
                        value={formData.cartype}>
                        <option value="">Choose your Car</option>
                        <option value="Audii">Audi</option>
                        <option value="BMW">BMW</option>
                        <option value="Benz">Benz</option>
                      </select>
                      {errors.cartype && <span>{errors.cartype}</span>}
                    </Col>
                    <Col md={6}>
                      <label htmlFor="serveDate">Service Date</label>
                      <input
                        type='date'
                        name='serveDate'
                        id='serveDate'
                        placeholder="Enter service date"
                        className='p-2 w-100'
                        onChange={handleChange}
                        value={formData.serveDate} />
                      {errors.serveDate && <span>{errors.serveDate}</span>}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <label htmlFor="complaints">Complaints</label>
                      <textarea
                        name='complaints'
                        id='complaints'
                        className='p-2 w-100'
                        onChange={handleChange}
                        value={formData.complaints} />
                      {errors.complaints && <span>{errors.complaints}</span>}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}></Col>
                    <Col md={6}><Button type='submit' variant="outline-info" className='w-100 mt-3' >Book Service</Button></Col>
                    <Col md={3}></Col>
                  </Row>
                </form>
              </Formpart>
            </Col>
          </Row>
        </Container>
      </Bookingsection>
    </section>
  )
}

export default Home