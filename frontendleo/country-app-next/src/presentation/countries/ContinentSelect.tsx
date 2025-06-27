import React from 'react'
import { ComponentPropsWithoutRef } from 'react'

interface ContinentSelectProps extends ComponentPropsWithoutRef<'select'> {
  continents: string[]
  onContinentChange: (continent: string) => void
}

function ContinentSelect({ continents, onContinentChange, ...props }: ContinentSelectProps) {

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    onContinentChange(e.target.value)
  }

  return (
    <div className="w-full">
        <select className="w-full text-grey-950 dark:text-white bg-white dark:bg-blue-900 p-2 rounded-md border border-grey-200 dark:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200" {...props} onChange={handleChange}>
            <option value="all" className="bg-white dark:bg-blue-900 text-grey-950 dark:text-white">Filter by Region</option>
            {continents.map((continent) => (
              <option key={continent} value={continent} className="bg-white  dark:bg-blue-900 text-grey-950 dark:text-white">
                {continent}
              </option>
            ))}
        </select>
    </div>
  )
}

export default ContinentSelect