import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HeroImage from '../../assets/images/mainSection/HeroImage.jpg';
const HeroPage = () => {
	return (
		<>
			<section className="my-5">
				<Container
					fluid
					className="hero-container"
					style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '69vh' }}
				>
					<Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '91%' }}>
						<Col className="hero-heading" style={{ width: '50vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<div>
								<h1>If You Tickle The Earth With Hoe She Laughs With A Harvest</h1>
								<p>
									There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
									injected humour, or randomised words which don't look even slightly believable.
								</p>
							</div>
						</Col>
						<Col style={{ padding: 0, display: 'flex', width: '50vw', alignItems: 'center', justifyContent: 'center', height: '48vh' }}>
							<div style={{ overflow: 'hidden' }}>
								<img src={HeroImage} alt="Image" style={{ width: '100%', height: '30%', objectFit: 'cover' }} />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default HeroPage;
