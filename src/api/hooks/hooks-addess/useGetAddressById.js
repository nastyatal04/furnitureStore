
import { baseURL } from '../../config'
import { useState } from 'react'

export const useGetAddressById = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = (dataId) => {
        setError(null)
        setIsLoading(true)
        fetch(`${baseURL}/address/${dataId}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    return [data, error, isLoading, fetchData]
}