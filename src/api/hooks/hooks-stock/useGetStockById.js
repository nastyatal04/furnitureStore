import { useState } from 'react'
import { baseURL } from '../../config'

export const useGetStockById = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = (dataId) => {
        setError(null)
        setIsLoading(true)
        fetch(`${baseURL}/stock/${dataId}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    return [data, error, isLoading, fetchData]
}
