import React from 'react'
import { Events } from './Events'

// import { Container } from './styles';

const Presentation = () => {
    return <Events date={new Date().toLocaleDateString()} />
}

export default Presentation
