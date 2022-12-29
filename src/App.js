import React from 'react'
import GlobalStyle from './styles/global'
import Header from './components/header'
import Resume from './components/resume'
import Form from './components/form'

const App = () => {
    return (
        <>
            <Header />
            <Resume />
            <Form />
            <GlobalStyle />
        </>
    )
}

export default App