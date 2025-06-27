import { useMemo, useState } from "react";
import { Country } from "@/entities/types";

export function useCountryFilter(countries: Country[]) {
  const [search, setSearch] = useState('');
  const [continent, setContinent] = useState('All');

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.name.toLowerCase().includes(search.toLowerCase());
      const matchesContinent = continent === 'All' || country.region === continent;
      return matchesSearch && matchesContinent;
    });
  }, [countries, search, continent]);

  return {
    search,
    setSearch,
    continent,
    setContinent,
    filteredCountries
  };
}

