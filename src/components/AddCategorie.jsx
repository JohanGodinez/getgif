import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategorie = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = e => {
    setInputValue(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (inputValue.trim().length > 2) {
      setCategories(cat => [inputValue, ...cat])
      setInputValue('')
    }
  }
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        className='px-3 py-2 rounded-md text-black'
        type='text'
        value={inputValue}
        onChange={e => handleChange(e)}
      />
    </form>
  )
}

AddCategorie.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
