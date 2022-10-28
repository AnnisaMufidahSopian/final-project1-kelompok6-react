import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router";

function AboutItem({ item }) {
    const navigate = useNavigate();
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
            {item.kode}.
            </Card.Text>
            <Button variant="primary" onClick={() => navigate(`${item.id}`)}>Open CV</Button>
        </Card.Body>
        </Card>
    );
}

export default AboutItem;