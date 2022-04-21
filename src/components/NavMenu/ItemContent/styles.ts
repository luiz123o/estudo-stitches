import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { iprStyled } from '../../../styles'
import { itemStyles } from '../styles'

export const NavLink = iprStyled(NavigationMenu.Link, {
    ...itemStyles,
    display: 'block',
    textDecoration: 'none',
    fontSize: 15,
    lineHeight: 1
})

export const ListItem = iprStyled('li', {})

export const LinkTitle = iprStyled('div', {
    fontWeight: 500,
    lineHeight: 1.2,
    marginBottom: 5,
    color: '$gray10'
})

export const LinkText = iprStyled('p', {
    all: 'unset',
    color: '$gray9',
    lineHeight: 1.4,
    fontWeight: 'initial'
})
