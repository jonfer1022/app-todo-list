import { Container } from 'react-bootstrap';

const Layout = (props:any) => (
  <Container>
    {props.children}
  </Container>
)

export default Layout;