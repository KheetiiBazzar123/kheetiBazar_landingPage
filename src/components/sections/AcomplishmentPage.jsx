import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bgImage from '../../assets/images/mainSection/about.jpg';
const AcomplishmentPage = () => {
	return (
		<>
			<div className="image-container">
				<img src={bgImage} alt="Big Image" className="big-image" />
				<div className="fixed-section">
					<Container>
						<Row>
							<Col>
								<h2>Gardening & Landscaping Services</h2>
								<p>This content will be fixed over the image.</p>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</>
	);
};

export default AcomplishmentPage;
