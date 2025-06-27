/* eslint-disable @next/next/no-img-element */
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import data from '@/infrastructure/external-resources/data.json'
import { Country } from '@/entities/types'

export default async function CountryDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const country = data.find(
    (c: Country) => c.name.toLowerCase() === decodeURIComponent(id).toLowerCase()
  );

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-red-500">Country not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-grey-50 dark:bg-blue-950 py-8">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Nav/Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-2 rounded-md bg-white dark:bg-blue-900 shadow hover:bg-grey-50 dark:hover:bg-blue-800 border border-grey-200 dark:border-blue-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Flag */}
          <div className="flex-1 flex justify-center">
            <img
              src={country.flags.svg}
              alt={`Flag of ${country.name}`}
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Info */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold mb-8 text-grey-950 dark:text-white">{country.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <p><span className="font-semibold">Native Name:</span> {country.nativeName}</p>
                <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
                <p><span className="font-semibold">Region:</span> {country.region}</p>
                <p><span className="font-semibold">Sub Region:</span> {country.subregion}</p>
                <p><span className="font-semibold">Capital:</span> {country.capital}</p>
              </div>
              <div className="space-y-2">
                <p><span className="font-semibold">Top Level Domain:</span> {country.topLevelDomain.join(', ')}</p>
                <p><span className="font-semibold">Currencies:</span> {country.currencies?.map(c => c.name).join(', ')}</p>
                <p><span className="font-semibold">Languages:</span> {country.languages.map(l => l.name).join(', ')}</p>
              </div>
            </div>
            {/* Border countries */}
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="font-semibold mr-2">Border Countries:</span>
              <div className="flex flex-wrap gap-2">
                {country.borders?.length ? (
                  country.borders.map(border => (
                    <span key={border} className="px-4 py-1 rounded bg-white dark:bg-blue-900 shadow text-sm border border-grey-200 dark:border-blue-800">
                      {border}
                    </span>
                  ))
                ) : (
                  <span className="text-grey-400">None</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}