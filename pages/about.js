import Link from "next/link";
import Card from "react-bootstrap/Card";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";
import Layout from "@/components/Layout";

export async function getStaticProps() {
  const listingID = "12954762";
  //const res = await fetch(`http://localhost:8000/api/listings/${listingID}`);
  const res = await fetch(
    `https://web422a1-api.onrender.com/api/listings/${listingID}`
  ); // NOTE: DOES NOT WORK! Data oonly shows locally (see above)
  const listingData = await res.json();

  return { props: { listing: listingData } };
}

export default function About({ listing }) {
  return (
    <Layout>
      <PageHeader prop="About the Developer: Cesca Dela Cruz" />
      <Card className="bg-white">
        <Card.Body>
          <p>
            Hello! I’m a CPA student at Seneca College, where I’m improving my
            skills in programming and analysis. Beyond my studies, I love
            watching horror movies, but I also love immersing myself in
            different genres, whether it’s a drama or a romantic comedy. I also
            enjoy exploring new culinary experiences, often going out to try
            unique dishes in downtown Toronto. In my freetime, I express my
            creativity through painting, finding joy in the process of bringing
            my ideas to life on canvas. I believe art and culture enrich our
            lives and foster connections.
          </p>
          <p>
            Currently, I have a
            <Link href={`/listing/${listing._id}`} passHref legacyBehavior>
              <Card.Link> Private Room </Card.Link>
            </Link>
            available for rent, offering a cozy and inviting space for anyone
            looking for a new place to call home. I’m excited to meet new people
            and share my love for good food, great films, and creative
            endeavors!
          </p>
          <ListingDetails listing={listing} />
        </Card.Body>
      </Card>
    </Layout>
  );
}
