import React from 'react'
import { ColorList } from '../components/color/ColorList'
import { ColorAdd } from '../components/color/ColorAdd'
import "./ColorPage.css"
import { ColorDetail } from '../components/color/ColorDetail'

export const ColorPage = () => {
  return (
    <div className='color-page'>
        <ColorList/>
        <ColorAdd/>
    </div>
  )
}
