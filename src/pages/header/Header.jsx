import { Navbar, Nav, NavItem, Container, NavDropdown } from 'react-bootstrap';
// import { NavItem, Row, Stack } from 'react-bootstrap/esm';
import logo from '../../assets/images/logo.png';
const Header = () => {
	return (
		<>
			<Navbar expand="lg" className="navbar-header">
				<Container>
					<Navbar.Brand href="#/">
						<img className="header-logo" src={logo} alt="logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse className="nav-collapse" id="basic-navbar-nav">
						<Nav className=" nav-links">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">About Us</Nav.Link>
							<Nav.Link href="#link">Services</Nav.Link>
							<Nav.Link href="#link" className="contact-heading">
								Contact Us
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
