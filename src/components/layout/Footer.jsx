import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../styles/components/footer/footer.module.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<Row>
					<Col className={styles.contactInfo}>
						<h2>Get In Touch</h2>
						<p>Phone: +61 3 8376 6284</p>
						<p>Email: contact@domain.com</p>
						<p>Address: 121 King Street, Melbourne Victoria 3000, Australia</p>
						<div className={styles.socialIcons}>
							{/* <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
							<FontAwesomeIcon icon={faTwitter} className={styles.icon} />
							<FontAwesomeIcon icon={faInstagram} className={styles.icon} />
							<FontAwesomeIcon icon={faYoutube} className={styles.icon} /> */}
						</div>
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
