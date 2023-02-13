import Card from 'react-bootstrap/Card';
export default function PageHeader(text) {
   return (
      <div>
         <Card className="bg-light">
            <Card.Body>
               <strong>{text.text}</strong>
            </Card.Body>
         </Card>
         <br />
      </div>
   );
}
