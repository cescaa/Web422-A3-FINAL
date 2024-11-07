import { Container, Row, Col } from "react-bootstrap";

export default function ListingDetails({ listing }) {
  const errImg = "https://placehold.co/600x400?text=Photo+Not+Available";
  return (
    <Container>
      <Row>
        <Col lg>
          <img
            onError={(event) => {
              event.target.onerror = null;
              event.target.src = errImg;
            }}
            className="img-fluid w-100"
            src={
              listing && listing.images ? listing.images.picture_url : errImg
            }
            alt="listing image"
          />
          <br />
          <br />
        </Col>
        <Col lg>
          <p>
            {listing.neighborhood_overview
              ? listing.neighborhood_overview
              : "No overview available."}
          </p>
          <br />
          <strong>Price:</strong> ${listing.price.toFixed(2)}
          <br />
          <strong>Room:</strong> {listing.room_type}
          <br />
          <strong>Bed:</strong> {listing.bed_type} ({listing.beds || 0})
          <br />
          <strong>Rating: </strong>
          {listing.review_scores.review_scores_rating || "No ratings yet."} (
          {`${listing.number_of_reviews} Reviews` || ""})
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
}
