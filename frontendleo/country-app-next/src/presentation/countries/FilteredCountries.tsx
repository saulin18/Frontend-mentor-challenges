'use client'
import SearchInput from '@/presentation/common/ui/SearchInput'
import ContinentSelect from '@/presentation/countries/ContinentSelect'
import CountryList from '@/presentation/countries/CountryList'
import { useCountryFilter } from '@/presentation/common/hooks/use-country-filter'
import { Country } from '@/entities/types'
import { useRouter } from 'next/navigation'

export default function FilteredCountrySection({ countries }: { countries: Country[] }) {
    const { search, setSearch, continent, setContinent, filteredCountries } = useCountryFilter(countries)
    const router = useRouter();

    const handleCountryClick = (country: Country) => {
        router.push(`/detail/${encodeURIComponent(country.name)}`)
    }

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-2 mb-10">
                <SearchInput
                    label="Search for a country..."
                    id="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <div className="w-full md:w-1/4">
                    <ContinentSelect
                        continents={['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']}
                        value={continent}
                        onContinentChange={setContinent}
                    />
                </div>
            </div>
            <CountryList countries={filteredCountries} onCountryClick={handleCountryClick} />
        </>
    )
}