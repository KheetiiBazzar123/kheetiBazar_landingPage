import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/css/style.css'; // Custom CSS for additional styling
const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col sm={12} md={4}>
						<h5 className="footer-logo">Kheeti Bazaar</h5>
						<p>All rights reserved.</p>
					</Col>
					<Col sm={12} md={4}>
						<h5>The Company</h5>
						<ul className="list-unstyled">
							<li>About</li>
							<li>Corporate Blog</li>
							<li>Customers</li>
							<li>Contact Us</li>
						</ul>
					</Col>
					<Col sm={12} md={4}>
						<h5>The Platform</h5>
						<ul className="list-unstyled">
							<li>Features</li>
							<li>Pricing</li>
							{/* ... other list items ... */}
						</ul>
					</Col>
					<Col sm={12} md={4}>
						<h5>Connect</h5>
						{/* Social media icons would go here */}
					</Col>
				</Row>
				<Row className="footer-bottom">
					<Col sm={12} md={6}>
						{/* App store buttons would go here */}
					</Col>
					<Col sm={12} md={6} className="text-md-right">
						<p>support@lime.com | Privacy Policy | Terms of Service</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
