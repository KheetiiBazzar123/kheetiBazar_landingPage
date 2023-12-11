import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../styles/components/footer/footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<div className={styles.footerContainer}>
			<Container>
				<Row>
					<Col className={styles.contactInfo}>
						<h2>Get In Touch</h2>
						<p>Phone: +61 3 8376 6284</p>
						<p>Email: contact@domain.com</p>
						<p>Address: 121 King Street, Melbourne Victoria 3000, Australia</p>
						<div className={styles.socialIcons}>
							<FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
							<FontAwesomeIcon icon={faTwitter} className={styles.icon} />
							<FontAwesomeIcon icon={faInstagram} className={styles.icon} />
							<FontAwesomeIcon icon={faYoutube} className={styles.icon} />
						</div>
					</Col>
					<Col>
						<div className={styles.map}>{/* Here you would embed your map */}</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
