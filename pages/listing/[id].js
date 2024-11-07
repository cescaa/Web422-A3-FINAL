import { useRouter } from "next/router";
import useSWR from "swr";
import ListingDetails from "@/components/ListingDetails";
import Error from "next/error";
import PageHeader from "@/components/PageHeader";

const Listing = () => {
  const router = useRouter();
  const { id } = router.query;

  // request data
  //const { data, error, isLoading } = useSWR(id ? `http://localhost:8000/api/listings/${id}` : null);
  const { data, error, isLoading } = useSWR(
    id ? `https://web422-a1-nine.vercel.app/api/listings/${id}` : null
  ); // NOT WORKING! ONLY WORKS THROUGH LOCAL PORT

  if (isLoading) return null;
  if (error || !data) {
    return <Error statusCode={404} />;
  }
  return (
    <div>
      <PageHeader prop={data.name} />
      <ListingDetails listing={data} />
    </div>
  );
};

export default Listing;
