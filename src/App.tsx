import React from 'react'
import './App.css'
import MenuBar from './MenuBar'
import ListMatch from './ListMatch'

function App() {
    return (
        <div>
            <header>
                <MenuBar></MenuBar>
            </header>
            <ListMatch></ListMatch>
        </div>
    )
}

export default App
