import React, { useState, useEffect } from 'react'
import GlobalStyle from './styles/global'
import Header from './components/header'
import Resume from './components/resume'
import Form from './components/form'

const App = () => {
    const data = localStorage.getItem('transactions')
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : [])

    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amountExpense = transactionsList
    }, [transactionsList])

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