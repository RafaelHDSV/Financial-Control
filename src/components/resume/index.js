import React from 'react'
import * as C from './style'
import ResumeItem from '../resumeItem'

const Resume = () => {
    return (
        <C.Container>
            <ResumeItem />
            <ResumeItem />
            <ResumeItem />
        </C.Container>
    )
}

export default Resume