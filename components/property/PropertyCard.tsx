// components/PropertyCard.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card, { CardContent } from "@/components/common/Card";
import { Property } from "@/interfaces/index";

interface PropertyCardProps {
  id: string | number; // API property ID
}

const PropertyCard: React.FC<PropertyCardProps> = ({ id }) => {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://your-api.com/properties/${id}`);
        setProperty(res.data);
        setError(null);
      } catch (err: any) {
        setError("Failed to load property.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <Card className="p-6">
        <p className="text-gray-500">Loading property...</p>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-6">
        <p className="text-red-500">{error}</p>
      </Card>
    );
  }

  if (!property) {
    return (
      <Card className="p-6">
        <p>No property found.</p>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-lg transition">
      {/* Image */}
      <div className="relative h-48 w-full">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <CardContent>
        <h3 className="text-lg font-semibold line-clamp-1">{property.title}</h3>
        <p className="text-sm text-gray-600 truncate">{property.location}</p>
        <p className="text-xl font-bold text-indigo-600">
          ${property.price.toLocaleString()}
        </p>
        <div className="flex items-center space-x-4 text-gray-600 text-sm">
          <span>{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
