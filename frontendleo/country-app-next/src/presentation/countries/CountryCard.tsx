import React from "react";
import { Country } from "@/entities/types";

interface CardProps {
    Country: Country,
    onClick?: () => void
}

function CountryCard({Country, onClick}: CardProps) {
  return (
    <div
      className="bg-white dark:bg-blue-950 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-[1.03] hover:shadow-lg"
      onClick={onClick}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={Country.flags.svg}
        alt="Country flag"
        className="w-full h-32 object-cover"
      />
      <div className="p-8" style={{ padding: '1rem' }}>
        <h3 className="text-lg font-bold mb-2">{Country.name}</h3>
        <p className="text-sm text-grey-700 dark:text-grey-300">
          Population: {Country.population}
        </p>
        <p className="text-sm text-grey-700 dark:text-grey-300">
          Region: {Country.region}
        </p>
        <p className="text-sm text-grey-700 dark:text-grey-300">
          Capital: {Country.capital}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
