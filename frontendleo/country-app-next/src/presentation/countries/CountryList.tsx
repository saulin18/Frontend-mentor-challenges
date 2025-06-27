import React from 'react'
import { Country } from '@/entities/types'
import CountryCard from './CountryCard'

interface CountryListProps {
  countries: Country[];
  onCountryClick?: (country: Country) => void;
}

function CountryList({ countries, onCountryClick }: CountryListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {countries.map((country) => (
        <CountryCard
          key={country.name}
          Country={country}
          onClick={onCountryClick ? () => onCountryClick(country) : undefined}
        />
      ))}
    </div>
  )
}

export default CountryList