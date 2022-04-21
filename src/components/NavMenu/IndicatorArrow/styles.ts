import { iprStyled } from '../../../styles'
import { fadeIn, fadeOut } from '../animation'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export const Indicator = iprStyled(NavigationMenu.Indicator, {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 10,
    top: '100%',
    overflow: 'hidden',
    zIndex: '$menubar',
    '@media (prefers-reduced-motion: no-preference)': {
        transition: 'width, transform 250ms ease',
        '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
        '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` }
    }
})
export const Arrow = iprStyled('div', {
    position: 'relative',
    top: '70%',
    backgroundColor: '$gray2',
    width: 12,
    height: 12,
    transform: 'rotate(45deg)',
    borderTopLeftRadius: 2
})
