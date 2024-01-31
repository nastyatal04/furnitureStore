import React from 'react'
import './ColorCard.css'

export const ColorCard = ({ id, name, hex }) => {
  const container = {
    backgroundColor: hex
  }

  return (
    <div className="color-card"  >
      <div className='color-card-view' style={container} />
      <div className="color-card-body">
        <span className='color-card-id'>{id}.</span>
        <span className="color-card-name">{name}</span>
      </div>
    </div>
  )
}
