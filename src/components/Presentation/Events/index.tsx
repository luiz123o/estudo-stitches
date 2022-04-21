import React from 'react'

import * as S from './styles'

type EventsProps = {
    date: string
}

export const Events = ({ date }: EventsProps) => {
    return (
        <S.EventsContainer>
            <S.Calendar />
            <S.EventDate>{date}</S.EventDate>
        </S.EventsContainer>
    )
}
