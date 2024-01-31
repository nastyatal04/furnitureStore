import React, { useEffect } from 'react'
import { useInput } from '../../api/hooks/useInput'
import "./ColorAdd.css"
import { useAddColor } from '../../api/hooks/hooks-color/useAddColor'

export const ColorAdd = () => {
    const [colorName, onColorNameChange] = useInput()
    const [colorHex, onColorHexChange] = useInput()
    const [color, error, isLoading, fetchData] = useAddColor()

    useEffect(() => {
        console.log(color);
    }, [color])


    return (
        <div className="color-add">
            <h3 className="add-title">Добавить цвет</h3>
            <div className="color-add-input">
                <span>Название цвета</span>
                <input
                    placeholder='Введите название цвета...'
                    value={colorName}
                    onChange={onColorNameChange}
                />
            </div>
            <div className="color-add-input">
                <span>HEX-код</span>
                <input
                    placeholder='Введите hex-код цвета...'
                    value={colorHex}
                    onChange={onColorHexChange}
                />
            </div>
            <button
                onClick={() => {
                    fetchData({ id: 0, name: colorName, hex: colorHex })
                }}
            >
                Добавить цвет</button>
        </div>
    )
}
