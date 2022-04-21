import React, { ComponentProps } from 'react'

import * as S from './styles'

export type ButtonProps = ComponentProps<typeof S['Button']> & {
    pill: boolean
    buttonLabel: string
}

const Button = ({
    pill = true,
    buttonLabel = 'label',
    ...props
}: ButtonProps) => {
    return (
        <S.Button pill={pill} {...props}>
            {buttonLabel}
        </S.Button>
    )
}

export default Button
