import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import Button from "react-bootstrap/Button";
export default function MainNavigation(){
    return(
        <Navbar expand="lg" style={{boxShadow:'10px 10px rgb(0,0,0,25%)'}} className="fixed-top  bg-secondary rounded-4 w-100 px-3 ">
        <Container className=''>
          <Navbar.Brand href="#home">
            <img src={logo} />
            CodeWithLeen</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about_me">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#Experience">Experience</Nav.Link>
            </Nav>
           <div>
          
          <a href="https://github.com/leenhija" target="_blank">
          <Button 
             className=" p2-1 pb-2 ps-4 pe-4 rounded-4"
             type="submit"
             style={{
               border: "none",
               color:'white',
               backgroundColor: "#464646",
               fontWeight:'200',
               fontFamily:'"Rubik" , serif'
             }}
          >GitHub</Button>
          </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}