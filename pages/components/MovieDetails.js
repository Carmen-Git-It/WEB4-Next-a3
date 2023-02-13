import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MovieDetails(movie) {
   let img = <></>;
   if (movie.hasOwnProperty("movie")) {
      movie = movie.movie;
   }
   if (movie.hasOwnProperty("poster") && movie.poster != '') {
      img = <Col md><img src={movie["poster"]} alt='poster' className='w-100' /><br /><br /></Col>;
   }
   return (
      <>
         <Container>
            <Row>
               {img}
               <Col md>
                  <strong>Directed By:</strong> {movie.hasOwnProperty("directors") ? movie.directors.join(', ') : "N/A"}<br /><br />
                  <p>{movie.fullplot}</p>
                  <strong>Cast:</strong> {movie.hasOwnProperty("cast") ? movie.cast.join(', ') : 'N/A'}<br /><br />
                  <strong>Awards:</strong> {movie.hasOwnProperty("awards") ? movie.awards.text : "N/A"}<br />
                  <strong>IMDB Rating</strong> {movie.hasOwnProperty("imdb") ? movie.imdb.rating : "N/A"} ({movie.hasOwnProperty("imdb") ? movie.imdb.votes : 0} votes)
               </Col>
            </Row>
         </Container>
      </>
   );
}
