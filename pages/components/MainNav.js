import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';


// !! IMPORTANT !!
// Nav.Link was causing hydration errors and I could not solve the issue.
export default function MainNav() {
   return (
      <div>
         <Navbar bg="dark" variant="dark" fixed="top" className="fixed-top">
            <Container>
               <Navbar.Brand>Carmen Whitton</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Link href="/" >Movies</Link>
                     <Link href="/about" >About</Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <br />
         <br />
      </div>
   );
}
