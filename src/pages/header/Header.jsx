import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../../assets/css/style.css';
import logo from '../../assets/images/header/logo.png';
const Header = () => {
	return (
		<header className="header">
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand href="#home">
						<img src={logo} alt="Kheeti Bazaar" className="logo" />
						<span className="brand-name">KHEETI BAZAAR</span>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#about">About Us</Nav.Link>
							<Nav.Link href="#services">Services</Nav.Link>
							<Nav.Link href="#contact">Contact Us</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
