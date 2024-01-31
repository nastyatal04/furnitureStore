import { useState } from 'react'
import { baseURL } from '../../config'

export const useAddColor = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = (dataFrom) => {
        console.log(dataFrom);
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataFrom)
        }
        setError(null)
        setIsLoading(true)
        fetch(`${baseURL}/color`, options)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    return [data, error, isLoading, fetchData]
}
