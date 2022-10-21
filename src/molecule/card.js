import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function NewsCard(props) {
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Img variant="top" src={props.gambar} />
        <Card.Title>{props.judul}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.name}</Card.Subtitle>
        <Card.Text>
          {props.deskripsi}
        </Card.Text>
        <Button variant="primary" target="_blank" href={props.url}>News Page</Button>
        <Button variant="warning" href={props.url}>Save</Button>
        
        
      </Card.Body>
    </Card>
  );
}

export default NewsCard;