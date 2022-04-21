import { iprStyled } from '../../../styles'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { itemStyles } from '../styles'
import { CaretDownIcon } from '@radix-ui/react-icons'

export const NavMenuItemTrigger = iprStyled(NavigationMenu.Trigger, {
    all: 'unset',
    ...itemStyles,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '$4',
    gap: 2
})

export const NavMenuDownIcon = iprStyled(CaretDownIcon, {
    position: 'relative',
    color: '$gray12',
    top: 0,
    '[data-state=open] &': { transform: 'rotate(-180deg)' },
    '@media (prefers-reduced-motion: no-preference)': {
        transition: 'transform 250ms ease'
    }
})
