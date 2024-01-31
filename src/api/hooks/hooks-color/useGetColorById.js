import { useState } from 'react'
import { baseURL } from '../../config'

export const useGetColorById = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = (dataId) => {
        setError(null)
        setIsLoading(true)
        fetch(`${baseURL}/color/${dataId}`)
            .then(response => response.json())
            .then(setData)
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    return [data, error, isLoading, fetchData]
}
