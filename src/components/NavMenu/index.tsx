import React from 'react'
import { IndicatorArrow } from './IndicatorArrow'
import { ItemContent } from './ItemContent'
import { ItemTriggers } from './ItemTriggers'

import * as S from './styles'

type ContentProps = {
    title: string
    text: string
}
type ItemsProps = {
    name: string
    link: string
    content?: ContentProps[]
}

type NavMenuProps = {
    items: ItemsProps[]
}

export const NavMenu = ({ items }: NavMenuProps) => {
    return (
        <S.NavMenuContainer>
            <S.NavMenuList>
                {items.map(({ name, link, content }) => (
                    <S.NavMenuItem key={name}>
                        {content && content?.length ? (
                            <S.NavMenuItem>
                                <ItemTriggers>{name}</ItemTriggers>
                                <S.NavItemContent>
                                    <S.ContentList
                                        layout={
                                            content.length > 1 ? 'one' : 'two'
                                        }
                                    >
                                        {content?.map(({ title, text }) => (
                                            <ItemContent
                                                title={title}
                                                key={title}
                                            >
                                                {text}
                                            </ItemContent>
                                        ))}
                                    </S.ContentList>
                                </S.NavItemContent>
                            </S.NavMenuItem>
                        ) : (
                            <S.NavMenuLink key={name} href={link}>
                                {name}
                            </S.NavMenuLink>
                        )}
                    </S.NavMenuItem>
                ))}
                <IndicatorArrow />
            </S.NavMenuList>
        </S.NavMenuContainer>
    )
}
