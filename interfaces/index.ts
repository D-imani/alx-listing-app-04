export interface CardProps {}
export interface ButtonProps {}
export interface Property {
  id: string | number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
}
export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

interface PropertyCardProps {
  id: string | number; // API property ID
}
export interface PillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}
