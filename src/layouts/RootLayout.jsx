import React from 'react'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
    return (
        <main>
            <aside>
                <nav>
                    <a href="/"><p>Главная</p></a>
                    <a href="/color"><p>Цвета</p></a>
                </nav>
            </aside>
            <Outlet />
        </main>
    )
}
