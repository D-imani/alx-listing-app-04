import React from "react";
import Card, { CardContent } from "../ui/Card";

type Property = {
  id: string | number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  description?: string;
  imageUrl: string;
};

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Main Card */}
      <Card>
        {/* Image */}
        <div className="relative h-64 w-full">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <CardContent>
          <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
          <p className="text-gray-600 mb-4">{property.location}</p>

          <p className="text-2xl font-bold text-indigo-600 mb-4">
            ${property.price.toLocaleString()}
          </p>

          <div className="flex items-center space-x-6 text-gray-700 mb-4">
            <span>{property.bedrooms} Beds</span>
            <span>{property.bathrooms} Baths</span>
          </div>

          {property.description && (
            <p className="text-gray-700 leading-relaxed">
              {property.description}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyDetail;
