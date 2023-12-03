import React from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap/esm';
const Footer = () => {
	return (
		<Container fluid className="footer-container">
			<Row className="footer-inline">
				<Col className="footer-content">
					&copy; Kheeti-Bazar <span>2023</span>
				</Col>
				{/* <Col>2023</Col> */}
			</Row>
		</Container>
	);
};

export default Footer;
