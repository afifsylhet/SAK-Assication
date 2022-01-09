import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import '../Gallary/Gallary.css'

const Gallary = () => {
    return (
        <div>
            <br />
            <h2 className='bg-light p-3 text-center'><span className='text-muted'>A few of our </span><span className='text-success'>beutiful moments...</span></h2>
            <br />

            <Container>
                <Row>
                    <Col xs={12} lg={4} md={6} className="hello my-2">

                        <img className='img-fluid border border-success p-2 w-100' src="https://i.ibb.co/n30S45Q/Gallary-1.jpg" alt="#" />
                    </Col>
                    <Col xs={12} lg={4} md={6} className="hello my-2">

                        <img className='img-fluid border border-success p-2 w-100' src="https://i.ibb.co/NCWPtqh/Gallary-2.jpg" alt="#" />
                    </Col>
                    <Col xs={12} lg={4} md={6} className="hello my-2">

                        <img className='img-fluid border border-success p-2 w-100' src="https://i.ibb.co/n30S45Q/Gallary-1.jpg" alt="#" />

                    </Col>
                    <Col xs={12} lg={4} md={6} className="hello my-2">
                        <img className='img-fluid border border-success p-2 w-100' src="https://i.ibb.co/NCWPtqh/Gallary-2.jpg" alt="#" />

                    </Col>
                    <Col xs={12} lg={4} md={6} className="hello my-2">
                        <img className='img-fluid border border-success p-2 w-100' src="https://i.ibb.co/n30S45Q/Gallary-1.jpg" alt="#" />


                    </Col>
                    <Col xs={12} lg={4} md={6} className="hello my-2">
                        <img className='img-fluid border border-success p-2 w-100' src="https://i.ibb.co/NCWPtqh/Gallary-2.jpg" alt="#" />

                    </Col>
                    <Col xs={12} lg={4} md={6} className="hello my-2">

                        <img className='img-fluid border border-success p-2 w-100' src="https://i.ibb.co/n30S45Q/Gallary-1.jpg" alt="#" />

                    </Col>
                    <Col xs={12} lg={4} md={6} className="hello my-2">
                        <img className='img-fluid border border-success p-2 w-100' src="https://i.ibb.co/NCWPtqh/Gallary-2.jpg" alt="#" />

                    </Col>
                </Row>
            </Container>



        </div>
    );
};

export default Gallary;