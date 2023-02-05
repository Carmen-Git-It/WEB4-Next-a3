import { Container } from 'react-bootstrap';

export default function Layout(props) {
   return (
      <div>
         <MainNav />
         <br />
         <Container>
            {props.children}
         </Container>
         <br />
      </div>
   );
}
