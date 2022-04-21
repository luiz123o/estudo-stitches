import { iprStyled } from '../../styles'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import {
    enterFromLeft,
    enterFromRight,
    exitToLeft,
    exitToRight,
    scaleIn,
    scaleOut
} from './animation'

export const NavMenuContainer = iprStyled(NavigationMenu.Root, {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    backgroundColor: 'transparent',
    zIndex: '$menubar'
})

export const NavMenuList = iprStyled(NavigationMenu.List, {
    all: 'unset',
    display: 'flex',
    width: '100%',
    gap: '$16',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: '$8',
    listStyle: 'none',
    boxShadow: `0 2px 10px $gray12`
})

export const itemStyles = {
    padding: '$4',
    outline: 'none',
    userSelect: 'none',
    fontWeight: 500,
    lineHeight: 1,
    fontSize: '$2',
    color: '$gray10'
}

export const NavMenuLink = iprStyled(NavigationMenu.Link, {
    ...itemStyles,
    display: 'block',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '$4',
    lineHeight: '$2'
})

export const NavMenuItem = iprStyled(NavigationMenu.Item, {})

export const NavItemContent = iprStyled(NavigationMenu.Content, {
    position: 'absolute',
    top: 60,
    left: 0,
    backgroundColor: '$gray2',
    borderRadius: '$rounded',
    width: '100%',
    '@media only screen and (min-width: 600px)': { width: 'auto' },
    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '250ms',
        animationTimingFunction: 'ease',
        '&[data-motion="from-start"]': { animationName: enterFromLeft },
        '&[data-motion="from-end"]': { animationName: enterFromRight },
        '&[data-motion="to-start"]': { animationName: exitToLeft },
        '&[data-motion="to-end"]': { animationName: exitToRight }
    }
})

export const NavItemViewPort = iprStyled(NavigationMenu.Viewport, {
    position: 'relative',
    transformOrigin: 'top center',
    marginTop: 10,
    width: '100%',
    borderRadius: 6,
    overflow: 'hidden',
    boxShadow:
        'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    height: 'var(--radix-navigation-menu-viewport-height)',

    '@media only screen and (min-width: 7680px)': {
        width: 'var(--radix-navigation-menu-viewport-width)'
    },
    '@media (prefers-reduced-motion: no-preference)': {
        transition: 'width, height, 300ms ease',
        '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
        '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` }
    }
})
export const ContentList = iprStyled('ul', {
    display: 'grid',
    alignItems: 'center',
    padding: 22,
    margin: 0,
    columnGap: 10,
    listStyle: 'none',
    variants: {
        layout: {
            one: {
                '@media only screen and (min-width: 768px)': {
                    width: '100%',
                    gridTemplateColumns: '1fr 1fr'
                }
            },
            two: {
                '@media only screen and (max-width: 768px)': {
                    width: '100%',
                    gridAutoFlow: 'column',
                    gridTemplateRows: 'repeat(3, 1fr)'
                }
            }
        }
    }
})
