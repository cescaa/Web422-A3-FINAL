import { Card } from "react-bootstrap";

export default function PageHeader({ prop }) {
  return (
    <>
      <Card className="bg-light">
        <Card.Body>
          <h1>{prop}</h1>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}
