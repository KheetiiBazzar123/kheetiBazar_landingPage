import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import styles from '../../styles/components/header/header.module.css';
import { logo } from '../../assets/images/index.jsx';

const Header = () => {
	return (
		<Navbar expand="lg" className={styles.navbarCustom}>
			<Container className={styles.container}>
				<Navbar.Brand href="#home" className={styles.navbarBrand}>
					<img src={logo} className="d-inline-block align-top" alt="logo" />
					<h3>Kheeti Bazzar</h3>
				</Navbar.Brand>
				<Navbar.Collapse id="basic-navbar-nav" className="basic-navbar-nav">
					<Nav className="me-auto basic-navbar-nav">
						<Nav.Link href="#home" className={styles.navLinkCustom}>
							Home
						</Nav.Link>
						<Nav.Link href="#about" className={styles.navLinkCustom}>
							About
						</Nav.Link>
						<Nav.Link href="#gallery" className={styles.navLinkCustom}>
							Gallery
						</Nav.Link>
						<Nav.Link href="#services" className={styles.navLinkCustom}>
							Services
						</Nav.Link>
						<Nav.Link href="#testimonial" className={styles.navLinkCustom}>
							Testimonial
						</Nav.Link>
						<Nav.Link href="#contact" className={styles.navLinkCustom}>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<Nav className={styles.navbarBrand}>
					<Nav.Link href="#get-started" className={styles.navLinkCustom + ' ' + styles.getStarted}>
						Get In Touch
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
