import { useState } from 'react'
import { baseURL } from '../../config'

export const useAddStock = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = (dataFrom) => {
        let options = {
            method: 'POST',
            body: JSON.stringify(dataFrom)
        }
        setError(null)
        setIsLoading(true)
        fetch(`${baseURL}/stock`,options)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    return [data, error, isLoading, fetchData]
}
