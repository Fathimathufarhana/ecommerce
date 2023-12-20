import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
    const {image,price,name,description} =props.data
  return (
    <Card style={{ width: '18rem', display:'flex' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>price: {price}</Card.Text>

        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;