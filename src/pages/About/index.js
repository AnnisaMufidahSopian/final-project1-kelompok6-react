import React from "react";
import AboutItem from "../../components/About/AboutIten";
import {getItems} from '../../components/About/DataAbout';
import { Row, Col, Container } from "react-bootstrap"
import { Outlet } from 'react-router-dom'


function About() {
    const items = getItems()
    return (
        <>
            <center>
                <h1>About the Team</h1>
                <p>Hallo perkenalkan kami dari Kelompok 6, kelas React and React Native, KAMPUS MERDEKA.</p>
            </center>
            <Container>
                <Row>
                    
                    {
                        items.map(item => (
                            <Col>
                            <AboutItem key={item.id} item={item} />
                            </Col>
                        ))
                    }
                    
                </Row>
            </Container>
            <Container>
                <Outlet />
            </Container>
            
        </>
    );
}

export default About