import React, { useState } from "react";
import { HERO_IMAGE, FILTER_LABELS } from "@/constants";
import Pill from "@/components/common/Pill";

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (label: string) => {
    setActiveFilter((prev) => (prev === label ? null : label));
  };
  return (
    <>
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-4 text-center"
      style={{ backgroundImage: `url(${HERO_IMAGE})` }}
    >
      <h1 className="text-5xl md:text-7xl font-thin mb-4">
        Find your favorite place here!
      </h1>
      <p className="text-lg md:text-3xl font-light">
        The best prices for over 2 million properties worldwide.
      </p>
    </div>
    <section className="px-4 py-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Filter by Category</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {FILTER_LABELS.map((label) => (
            <Pill
              key={label}
              label={label}
              isActive={activeFilter === label}
              onClick={() => handleFilterClick(label)}
            />
          ))}
        </div>

        {/* Optional: Display active filter */}
        {activeFilter && (
          <p className="mt-4 text-center text-sm text-gray-600">
            Showing results for: <strong>{activeFilter}</strong>
          </p>
        )}
      </section>
      </>
  );
};

export default Home;
