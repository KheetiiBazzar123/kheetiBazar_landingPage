import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import styles from '../../styles/components/footer/footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<Row className={styles.container}>
					<Col md={6} lg={3}>
						<h4 className={styles.footerColTitle}>company</h4>
						<ul className={styles.footerColList}>
							<li>
								<a href="#">about us</a>
							</li>
							<li>
								<a href="#">our services</a>
							</li>
							<li>
								<a href="#">privacy policy</a>
							</li>
							<li>
								<a href="#">affiliate program</a>
							</li>
						</ul>
					</Col>
					<Col md={6} lg={3}>
						<h4 className={styles.footerColTitle}>get help</h4>
						<ul className={styles.footerColList}>
							<li>
								<a href="#">FAQ</a>
							</li>
							<li>
								<a href="#">shipping</a>
							</li>
							<li>
								<a href="#">returns</a>
							</li>
							<li>
								<a href="#">order status</a>
							</li>
							<li>
								<a href="#">payment options</a>
							</li>
						</ul>
					</Col>
					<Col md={6} lg={3}>
						<h4 className={styles.footerColTitle}>online shop</h4>
						<ul className={styles.footerColList}>
							<li>
								<a href="#">watch</a>
							</li>
							<li>
								<a href="#">bag</a>
							</li>
							<li>
								<a href="#">shoes</a>
							</li>
							<li>
								<a href="#">dress</a>
							</li>
						</ul>
					</Col>
					<Col md={6} lg={3}>
						<h4 className={styles.footerColTitle}>follow us</h4>
						<div className={styles.socialLinks}>
							<a href="#">
								<FontAwesomeIcon icon={faFacebookF} />
							</a>
							<a href="#">
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a href="#">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a href="#">
								<FontAwesomeIcon icon={faLinkedinIn} />
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
