import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import MovieDetails from "@/pages/components/MovieDetails";
import PageHeader from "@/pages/components/PageHeader";

export function getStaticProps() {
   return new Promise((resolve, reject) => {
      fetch("https://inquisitive-lamb-costume.cyclic.app/api/movies/573a1390f29313caabcd5c0f")
         .then(res => res.json())
         .then(data => {
            resolve({ props: { movie: data } });
         })
         .catch((err) => {
            reject(err);
         });
   });
}

export default function About(props) {
   return (
      <>
         <PageHeader text="About the Developer : Carmen Whitton" />
         <Card>
            <Card.Body>
               Hello, I am a computer programming and analysis student at Seneca College, currently in my 4th semester.
               I don`apos;`t generally enjoy developing for the web because I prefer statically typed languages and we are not
               encouraged to use Typescript. My favourite colour is cyan. Lorem Ipsum. I`$apos;`m really not sure what else to put here.
               Fingers crossed that this is adequate.

               <Link href={"/movies/" + props.movie.title}>{props.movie.title}</Link>
            </Card.Body>
            <MovieDetails movie={props.movie} />
         </Card>

      </>
   );
}
