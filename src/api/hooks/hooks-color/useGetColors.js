import { useState } from 'react'
import { baseURL } from '../../config'

export const useGetColors = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = () => {
        setError(null)
        setIsLoading(true)
        fetch(`${baseURL}/color`)
            .then(response => response.json())
            .then(setData)
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    return [data, error, isLoading, fetchData]
}
