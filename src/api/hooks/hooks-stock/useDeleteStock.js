import { useState } from 'react'
import { baseURL } from '../../config'

export const useDeleteStock = () => {
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = (dataId) => {
        let options = {
            method: 'DELETE'
        }
        setError(null)
        setIsLoading(true)
        fetch(`${baseURL}/stock/${dataId}`, options)
            .then(response => response.json())
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    return [error, isLoading, fetchData]
}
