import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../../assets/css/style.css'; // Custom CSS for additional styling
import backgroundLogo from '../../assets/images/mainSection/background-landing.jpg'; // Import image for use in JSX

const Main = () => {
	return (
		<>
			<Container fluid className="px-0 main-background">
				<Row className="mx-0">
					<Col className="px-0">
						<div className="main-image-container">
							<img src={backgroundLogo} alt="Field" className="main-image" />
							<div className="main-text-container">
								<h1 className="main-title">Welcome to KHEETI BAZAAR</h1>
								<p className="main-subtitle">Your one-stop solution for post-harvest challenges</p>
								<Button variant="primary" className="main-button">
									Learn More
								</Button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>

			<Container className="my-5">
				<Row>
					<Col md={6}>
						<h2>Our Solutions</h2>
						<p>Addressing post-harvest challenges with tech-enabled solutions.</p>
						<Button variant="success">Tech-Enabled Marketplace</Button>
					</Col>
					<Col md={6}>{/* Place additional content or images here */}</Col>
				</Row>
			</Container>

			<Container className="my-5 business-models-section">
				<h2 className="text-center mb-4">Our Business Models</h2>
				<p className="text-center text-muted mb-5">Designed for farmers and consumers</p>
				<Row className="g-4">
					<Col md={6}>
						<Card>
							<Card.Body>
								<Card.Title>Farmers 2 Business (F2B)</Card.Title>
								<Card.Text>Direct procurement for businesses.</Card.Text>
								<Button variant="link" className="p-0">
									Learn More →
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col md={6}>
						<Card>
							<Card.Body>
								<Card.Title>Farmers 2 Consumer (F2C)</Card.Title>
								<Card.Text>Future model for direct consumer access.</Card.Text>
								<Button variant="link" className="p-0">
									Learn More →
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<div className="text-center mt-4">
						<Button variant="primary">Join Us</Button>
					</div>
				</Row>
			</Container>

			{/* Solutions Section */}
			<Container className="my-5 solutions-section">
				<h2 className="text-center mb-4">Our Solutions</h2>
				<p className="text-center text-muted mb-5">Addressing post-harvest challenges</p>
				<Row className="g-4">
					<Col lg={4} className="d-flex align-items-stretch">
						<Card>
							<Card.Img variant="top" src="your-statistics-image-url.png" />
							<Card.Body>
								<Card.Title>TECH-ENABLED MARKETPLACE</Card.Title>
							</Card.Body>
							<Card.Footer>
								<Button variant="primary">Get Started</Button>
							</Card.Footer>
						</Card>
					</Col>
					<Col lg={8} className="d-flex align-items-stretch">
						<Card>
							<Card.Body>
								<Card.Title>Eliminate Intermediaries</Card.Title>
								<Card.Text>Our platform ensures fair prices for both farmers and consumers by eliminating intermediaries.</Card.Text>
								<Button variant="link" className="p-0">
									Explore More →
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>

			{/* Additional Features Section */}
			<Container className="my-5 additional-features-section">
				<h2 className="text-center mb-4">Additional Features</h2>
				<p className="text-center text-muted mb-5">Explore our services</p>
				<Row className="justify-content-center mb-4">
					<Col md={6} lg={4}>
						<Card className="feature-card">
							<Card.Body>
								<Card.Title>Feature 1 Innovation</Card.Title>
								<Card.Text>Discover our innovative solutions for post-harvest challenges.</Card.Text>
								<Button variant="link" className="p-0">
									Explore →
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<div className="text-center">
					<Button variant="primary">View All Features</Button>
				</div>
			</Container>

			{/* Our Partners Section */}
			<Container className="my-5 our-partners-section">
				<h2 className="text-center mb-4">Our Partners</h2>
				<Row className="justify-content-center mb-4">
					<Col className="d-flex justify-content-around align-items-center">
						{/* Replace with actual logos */}
						<span>Facebook</span>
						<span>IBM</span>
						<span>Microsoft</span>
						{/* ... other logos ... */}
					</Col>
				</Row>
				<div className="text-center">
					<Button variant="outline-primary">Become a Partner</Button>
				</div>
			</Container>

			{/* What Our Users Say Section */}
			<Container className="my-5 users-say-section">
				<h2 className="text-center mb-4">What Our Users Say</h2>
				<Row className="justify-content-center mb-4">
					<Col md={6} lg={4}>
						<Card>
							<Card.Img variant="top" src="user-testimonial-image-url.jpg" />
							<Card.Body>
								<Card.Title>User 1</Card.Title>
								<Card.Text>KHEETI BAZAAR has revolutionized our farming business.</Card.Text>
								<Button variant="link" className="p-0">
									Read More →
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<div className="text-center">
					<Button variant="primary">View All Testimonials</Button>
				</div>
			</Container>

			<Container className="my-5 cta-section text-center">
				<Row className="justify-content-center">
					<Col md={8} lg={6}>
						<h2>Ready to join KHEETI BAZAAR?</h2>
						<p className="text-muted">Sign up today and empower farmers</p>
						<Button variant="primary" size="lg">
							Sign Up
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Main;
