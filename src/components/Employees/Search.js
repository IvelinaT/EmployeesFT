import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Card from '../UI/Card'
import './Search.css'

const Search = React.memo((props) => {
  const { onFilterEmployees } = props
  const [keyWord, setKeyWord] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (keyWord === inputRef.current.value) {
        onFilterEmployees(keyWord)
      }
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [keyWord, inputRef, onFilterEmployees])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>
                Filter by Name
          </label>
          <input
            type="text"
            value={keyWord}
            ref={inputRef}
            onChange={(event) => setKeyWord(event.target.value)}
          />
          <span onClick={(event) => setKeyWord('')}>
                x
          </span>
        </div>
      </Card>
    </section>
  )
})
Search.propTypes = {
  onFilterEmployees: PropTypes.func.isRequired
}
Search.displayName = 'Search'
export default Search
