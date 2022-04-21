import React, { ComponentProps, forwardRef } from 'react'

import * as S from './styles'

type IndicatorArrowProps = ComponentProps<typeof S['Indicator']>

export const IndicatorArrow = forwardRef<HTMLDivElement, IndicatorArrowProps>(
    ({ ...props }, forwardedRef) => {
        return (
            <S.Indicator {...props} ref={forwardedRef}>
                <S.Arrow />
            </S.Indicator>
        )
    }
)
IndicatorArrow.displayName = 'IndicatorArrow'
