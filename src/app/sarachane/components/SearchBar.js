'use client'

import styles from '../styles/searchbar.module.css' // Adjust the import path
//import classNames from 'classnames/bind'

import { useState, useEffect } from 'react'

//const cx = classNames.bind(styles)

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  useEffect(() => {
    console.log('Component mounted on the client side')
  }, [])
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleChange = (event) => {
    console.log(searchQuery)
    setSearchQuery(event.target.value)
  }

  const handleSubmit = () => {
    // Add your submit logic here
    console.log('Search submitted:', searchQuery)
  }

  return (
    <div className={styles.searchBar}>
      <img src="/icons/Search.svg" alt="Icon" className={styles.icon} />

      <input
        type="text"
        id="name"
        name="name"
        minLength="4"
        maxLength="8"
        size="10"
        className={styles.inputBox}
        // search={true}
        placeholder="Search by owners, horses and pack"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default SearchBar
