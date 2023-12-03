// Import necessary libraries and components
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../App.css';
import villageLandscapeImage from '../../assets/images/aboutSection/Village_Landscape.png';
import ourSolutionImage from '../../assets/images/aboutSection/our-solution-image.png';

// Define the About component
const About = () => {
	return (
		<div className="about-section" id="about">
			<Container>
				<Row>
					<Col md={12} className="text-center">
						<h2 className="section-heading">About Us</h2>
						<p className="section-subheading">Empowering Farmers with Tech-Enabled Solutions</p>
					</Col>
				</Row>

				{/* Company Details Section */}
				<Row className="about-subsection">
					<Col md={6}>
						<div className="about-subsection-content">
							<h3>Company Details</h3>
							<p>
								TSPK KHEETII BAZAAR31 SERVICES PRIVATE LIMITED is an Agricultural Tech company specializing in Post-harvesting Solutions for
								farmers. We provide technology and supply chain facilities to address the challenges faced by farmers in the current
								agricultural marketing system.
							</p>
						</div>
					</Col>
					<Col md={6} className="about-subsection-image">
						{/* Use an image related to your company */}
						<img src={villageLandscapeImage} alt="Company Details" />
					</Col>
				</Row>

				{/* Problems We Solve Section */}
				<Row className="about-subsection">
					<Col md={6} className="order-md-2">
						<div className="about-subsection-content">
							<h3>Problems We Solve</h3>
							<p>
								Farmers face limited options to sell their crops, often forced to sell in local Mandis. The current agricultural marketing
								system involves multiple intermediaries, leading to significant price variations and low profits for farmers. Our goal is to
								eliminate or reduce these middlemen by providing farmers with a tech-enabled marketplace.
							</p>
						</div>
					</Col>
					<Col md={6} className="order-md-1 about-subsection-image">
						{/* Use an image related to the problems you solve */}
						<img src="problems-solved-image.jpg" alt="Problems We Solve" />
					</Col>
				</Row>

				{/* Our Solution Section */}
				<Row className="about-subsection">
					<Col md={6}>
						<div className="about-subsection-content">
							<h3>Our Solution</h3>
							<p>
								We offer farmers an E-Marketplace where they can register and sell their products directly to consumers. Our platform allows
								consumers (retailers, wholesalers, hotels, restaurants) to register and place their demands, enabling us to connect farmers
								directly with consumers. This eliminates/reduces the number of middlemen, providing farmers with better rates and consumers
								with fair prices.
							</p>
						</div>
					</Col>
					<Col md={6} className="about-subsection-image">
						{/* Use an image related to your solution */}
						<img src={ourSolutionImage} alt="Our Solution" />
					</Col>
				</Row>

				{/* Future Plans Section */}
				<Row className="about-subsection">
					<Col md={6} className="order-md-2">
						<div className="about-subsection-content">
							<h3>Future Plans</h3>
							<p>
								In the future, we plan to implement a Farmers-to-Consumers (F2C) model. This involves giving franchise opportunities to
								retailers across the country, creating a network of #KHEETII BAZAAR stores. These stores will directly source from farmers
								and sell items at predetermined rates to end consumers, eliminating the need for traditional Mandis.
							</p>
						</div>
					</Col>
					<Col md={6} className="order-md-1 about-subsection-image">
						{/* Use an image related to your future plans */}
						<img src="future-plans-image.jpg" alt="Future Plans" />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default About;
