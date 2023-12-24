import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from '../../assets/images/mainSection/HeroImage.jpg';
import styles from '../../styles/components/heroPage/heroPage.module.css';

const HeroPage = () => {
	return (
		<>
			<section className="my-5">
				<Container fluid className={styles.heroContainer}>
					<Row className={styles.rowStyle}>
						<Col className={`${styles.colStyle} ${styles.yellowBackground}`}>
							<div>
								<h1 className={styles.heading1}>We Are Here For You 😊</h1>
								<h3 className={styles.heading3}>
									Our platform is a game-changer for You. With direct access to a vast market, farmers can now sell their produce at
									better prices, substantially increasing their profits.
								</h3>
							</div>
						</Col>

						<Col className={styles.colStyle}>
							<img src={HeroImage} alt="Image" className={styles.imageStyle} />
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default HeroPage;
