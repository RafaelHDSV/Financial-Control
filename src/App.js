import React from 'react'
import GlobalStyle from './styles/global'
import Header from './components/header'
import Resume from './components/resume'

const App = () => {
    return (
        <>
            <Header />
            <Resume />
            <GlobalStyle />
        </>
    )
}

export default App