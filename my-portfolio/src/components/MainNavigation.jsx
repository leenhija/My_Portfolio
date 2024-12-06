import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
export default function MainNavigation(){
    return(
        <Navbar expand="lg" style={{boxShadow:'10px 10px rgb(0,0,0,25%)'}} className="fixed-top bg-secondary rounded-4 w-100 px-3 ">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} />
            Leen.Programming</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about_me">About me</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#Experience">Experience</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}