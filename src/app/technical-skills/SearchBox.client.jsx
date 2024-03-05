'use client'
import React, { useState } from 'react'

const SearchBox = ({ allTerms }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredTerms, setFilteredTerms] = useState(null)

  const onSearch = (searchTerm) => {
    if (searchTerm.length === 0) {
      setFilteredTerms(null)
      return
    }
    const filtered = allTerms.filter((term) =>
      term.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    // Sort the filtered terms
    filtered.sort((a, b) => a.localeCompare(b))
    setFilteredTerms(filtered)
  }

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search technologies..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
          onSearch(e.target.value)
        }}
        className="w-4/5 rounded-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-800 md:w-1/3"
      />
      <ul className="my-2 ml-4 flex flex-wrap gap-2">
        {filteredTerms?.length > 0 &&
          filteredTerms?.map((term, index) => (
            <li
              key={index}
              className="m-1 w-fit rounded-md bg-zinc-100 px-2 py-1 text-zinc-700 dark:bg-zinc-700/50 dark:text-zinc-300"
            >
              {term}
            </li>
          ))}
        {searchTerm.length > 0 && filteredTerms?.length === 0 && (
          <li className="m-1 w-fit rounded-md bg-red-100 px-2 py-1 dark:bg-red-700/50">
            No results found
          </li>
        )}
      </ul>
    </div>
  )
}

export default SearchBox
