import React, { useState } from 'react'
import PropTypes from 'prop-types'

const styles = {
  button: {
    marginLeft: '1rem',
    fontFamily: 'Rancho, serif',
    fontSize: '20px'
  },
  form: {
    marginTop: '0.5rem',
    marginBottom: '1.5rem',
    height: '1.5rem',
    fontSize: '25px',
    fontFamily: 'Rancho, serif'
  }
}

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddTodo({ onCreate }) {
  const input = useInputValue('')

  function submitHandler(event) {
    event.preventDefault()

    if (input.value().trim()) {
      onCreate(input.value())
      input.clear()
    }
  }

  return (
    <form style={styles.form} onSubmit={submitHandler}>
      <input {...input.bind} style={styles.form}/>
      <button type='submit' style={styles.button}>Add todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo
