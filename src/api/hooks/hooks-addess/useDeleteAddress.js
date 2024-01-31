
import { baseURL } from '../../config'
import { useState } from 'react'

export const useDeleteAddress = () => {
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = (dataId) => {
        let options = {
            method: 'DELETE'
        }
        setError(null)
        setIsLoading(true)
        fetch(`${baseURL}/address/${dataId}`, options)
            .then(response => response.json())
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    return [error, isLoading, fetchData]
}