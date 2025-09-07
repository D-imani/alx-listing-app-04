import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "@/components/property/PropertyCard";

type Property = {
  id: string | number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
};

const PropertyDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return; // wait for dynamic route param

    const fetchProperty = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://your-api.com/properties/${id}`);
        setProperty(res.data);
        setError(null);
      } catch (err: any) {
        setError("Failed to load property details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p className="p-6 text-gray-500">Loading property...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (!property) return <p className="p-6">No property found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Property Details</h1>
      <PropertyCard property={property} />
    </div>
  );
};

export default PropertyDetailPage;
