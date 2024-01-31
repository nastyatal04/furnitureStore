import React, { useEffect } from 'react'
import { useGetColorById } from '../../api/hooks/hooks-color/useGetColorById'
import { useParams } from "react-router-dom"
import './ColorDetail.css'

export const ColorDetail = () => {
  const {id} = useParams()
  const [color, error, isLoading, fetchData] = useGetColorById()
  useEffect(() => {
    fetchData(id)
  }, [])
  
  const container = {
    backgroundColor: color.hex
  }

  return (
    <div className="color-detail"  >
      <div className='color-detail-view' style={container} />
      <div className="color-detail-body">
        <span className='color-detail-id'>{color.id}.</span>
        <span className="color-detail-name">{color.name}</span>
      </div>
      <div className='color-detail-hex'>{color.hex}</div>
      <button className='button-delete-color'>Удалить цвет</button>
    </div>
  )
}
