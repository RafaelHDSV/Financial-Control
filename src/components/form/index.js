import React, { useState } from 'react'
import * as C from './style'

const Form = () => {
    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState('')
    const [isExpense, setExpense] = useState(false)

    const handleSave = () => {
        if (!desc || !amount) {
            alert('Informe a descrição e o valor!')
            return;
        } else if (amount < 1) {
            alert('O valor tem que ser positivo!')
            return;
        }
    }

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.label>Descrição</C.label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </C.InputContent>

                <C.InputContent>
                    <C.label>Valor</C.label>
                    <C.Input value={amount} type='number' onChange={(e) => setAmount(e.target.value)} />
                </C.InputContent>

                <C.RadioGroup>
                    <C.Input type='radio' id='rIncome' defaultChecked name='group1' onChange={() => setExpense(!isExpense)} />
                    <C.label htmlFor='rIncome'>Entrada</C.label>

                    <C.Input type='radio' id='rExpenses' name='group1' onChange={() => setExpense(!isExpense)} />
                    <C.label htmlFor='rExpenses'>Saída</C.label>
                </C.RadioGroup>

                <C.Button onClick={handleSave}>ADICIONAR</C.Button>
            </C.Container>
        </>
    )
}

export default Form