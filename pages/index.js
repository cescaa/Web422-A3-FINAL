/*********************************************************************************
 * WEB422 – Assignment 3
 *
 * I declare that this assignment is my own work in accordance with Seneca's
 * Academic Integrity Policy:
 *
 * https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
 *
 * Name: Cesca Dela Cruz______ Student ID: 123123150 Date: Oct 11 2024
 *
 ********************************************************************************/
import { useState, useEffect } from "react";
import useSWR from "swr";
import { Accordion, Pagination } from "react-bootstrap";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  // add states
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  // request data
  //const { data, error } = useSWR(`http://localhost:8000/api/listings/?page=${page}&perPage=10`);
  const { data, error } = useSWR(
    `https://web422a1-api.onrender.com/api/listings/?page=${page}&perPage=10`
  ); // NOTE: DOES NOT WORK; DATA SHOWS LOCALLY ONLY

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  // set page state
  const prev = () => {
    if (page > 1) {
      setPage((p) => p - 1);
    }
  };
  const next = () => {
    setPage((p) => p + 1);
  };

  // https://react-bootstrap.github.io/docs/components/accordion/
  return (
    <>
      <PageHeader prop="Browse Listings: Sorted by Number of Ratings" />
      <Accordion>
        {pageData.map((listing) => (
          <Accordion.Item key={listing._id} eventKey={listing._id}>
            <Accordion.Header>
              <p>
                <strong>{listing.name}</strong>
                <br />
                <br />
                {listing.address.street}
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <ListingDetails listing={listing} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <Pagination>
        <Pagination.Prev onClick={prev} disabled={page === 1} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  );
}
