
import { baseURL } from '../../config'
import { useState } from 'react'

export const useGetAddresses = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = () => {
        setError(null)
        setIsLoading(true)
        fetch(`${baseURL}/address`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    return [data, error, isLoading, fetchData]
}