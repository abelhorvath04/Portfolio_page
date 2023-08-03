import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavItemsRight from './NavItemsRight';
import NavItemsLeft from './NavItemsLeft'
import { Link } from 'react-router-dom' 

export default function NavigationLine() {
  return (
    <header>
      <Navbar data-bs-theme="dark" expand="xl" className="bg-primary">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <NavItemsLeft />
            <NavItemsRight/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
