import { maxHeight } from '@mui/system'
import React from 'react'
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
    return (

        <Container className="mt-5">
            <Row>
                <Col style={{ background: 'red' }} md={{ span: 8, order: 1 }} sm={{ span: 12, order: 2 }}>
                    sm=8
                </Col>
                <Col style={{ background: 'pink' }} md={{ span: 4, order: 2 }} sm={{ span: 12, order: 1 }}>sm=4</Col>
            </Row>
        </Container>

    )
}

export default Banner