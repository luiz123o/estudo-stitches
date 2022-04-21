import React, { forwardRef, ComponentProps, ReactNode } from 'react'
import * as S from './styles'

type ItemTriggersProps = {
    children: ReactNode
} & ComponentProps<typeof S['NavMenuItemTrigger']>

export const ItemTriggers = forwardRef<HTMLButtonElement, ItemTriggersProps>(
    ({ children, ...props }, forwardedRef) => {
        return (
            <S.NavMenuItemTrigger {...props} ref={forwardedRef}>
                {children}
                <S.NavMenuDownIcon aria-hidden />
            </S.NavMenuItemTrigger>
        )
    }
)

ItemTriggers.displayName = 'ItemTriggers'
