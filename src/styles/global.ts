import { globalCss } from './index'
export const globalStyles = globalCss({
    '@font-face': {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontDisplay: 'swap',
        fontWeight: 500,
        src: "url('../../fonts/Poppins500.woff2')"
    },
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        '&::after': {
            boxSizing: 'inherit'
        },
        '&::before': {
            boxSizing: 'inherit'
        }
    },
    body: {
        fontFamily: '$normal',
        fontWeight: 500,
        backgroundColor: '$gray3',
        color: '$gray12'
    },
    button: {
        fontFamily: '$normal',
        fontWeight: 500
    },
    input: {
        fontFamily: '$normal',
        fontWeight: 500
    }
})
