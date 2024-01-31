import { useState } from 'react'

export const useInput = (initialValue = "") => {
    const [value, setValue] = useState(initialValue)
    const changeValue = event => setValue(event.target.value)
  return [value, changeValue]
}
