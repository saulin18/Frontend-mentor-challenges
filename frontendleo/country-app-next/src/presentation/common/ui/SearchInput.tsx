import React, { ReactNode } from 'react'
import { ComponentPropsWithoutRef } from 'react'

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  children?: ReactNode
  label: string
}



function SearchInput({ label, id, ...props }: InputProps) {

  return (
    <div className="relative">
      <label htmlFor={id} className='sr-only'>{label}</label>
      <input
        id={id}
        type="text"
        placeholder="Search for a country..."
        className="w-[150px] pr-4 py-3 rounded-md border border-grey-200 dark:border-blue-800 bg-white dark:bg-blue-950 text-grey-950 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-grey-400">
       
      </span>
    </div>
  )
}

export default SearchInput