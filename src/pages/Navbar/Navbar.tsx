import { Nav, Navbar, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import UsersActions from "../../redux/reducer/users.reducer";

const NavBar = () => {
  const dispatch = useDispatch();
  let allowUser = useSelector( ({ users }:any) => users.allowUser);
  
  const closeSession = () => dispatch(UsersActions.closeSession(false));

  return(
  <div id="nav-bar">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/my-profile">Mi Perfil</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/backlog">Backlog</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/register">Registrarse</Nav.Link>
          <Nav.Link href="/login" onClick={() => allowUser ? closeSession(): null }>{allowUser ? "Cerrar sesión" : "Iniciar sesión"}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default NavBar;