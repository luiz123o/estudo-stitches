import React, { ComponentProps, forwardRef, ReactNode } from 'react'

import * as S from './styles'

type ItemContentProps = {
    children: ReactNode
    title: string
} & ComponentProps<typeof S['NavLink']>

export const ItemContent = forwardRef<HTMLAnchorElement, ItemContentProps>(
    ({ children, title, ...props }, forwardedRef) => {
        return (
            <S.ListItem>
                <S.NavLink
                    {...props}
                    ref={forwardedRef}
                    css={{
                        padding: 12,
                        borderRadius: 6,
                        '&:hover': { backgroundColor: '$gray4' }
                    }}
                >
                    <S.LinkTitle>{title}</S.LinkTitle>
                    <S.LinkText>{children}</S.LinkText>
                </S.NavLink>
            </S.ListItem>
        )
    }
)

ItemContent.displayName = 'ItemContent'
