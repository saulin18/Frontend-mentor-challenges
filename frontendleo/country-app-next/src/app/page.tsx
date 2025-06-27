import FilteredCountrySection from '@/presentation/countries/FilteredCountries'
import data from '@/infrastructure/external-resources/data.json'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-8" style={{ padding: '0.5rem' }}>
        <FilteredCountrySection countries={data} /> 
    </main>
 
  )
}