import { createStitches, ScaleValue } from '@stitches/react'
import { indigo, gray, indigoDark, grayDark } from '@radix-ui/colors'
const convertToRem = (value: number) => `${value / 16}rem`

const space = {
    4: convertToRem(4),
    8: convertToRem(8),
    12: convertToRem(12),
    16: convertToRem(16),
    20: convertToRem(20),
    24: convertToRem(24),
    28: convertToRem(28),
    32: convertToRem(32),
    36: convertToRem(36),
    40: convertToRem(40)
}
const fontSize = {
    4: convertToRem(4),
    8: convertToRem(8),
    12: convertToRem(12),
    16: convertToRem(16),
    20: convertToRem(20),
    24: convertToRem(24),
    28: convertToRem(28),
    32: convertToRem(32),
    36: convertToRem(36),
    40: convertToRem(40)
}

export const {
    styled: iprStyled,
    createTheme,
    getCssText,
    globalCss
} = createStitches({
    prefix: 'ipr',
    theme: {
        fonts: {
            normal: "'Poppins', Roboto, -apple-system, BlinkMacSystemFont, helvetica, arial, sans-serif"
        },

        colors: {
            ...indigoDark,
            ...grayDark
        },
        radii: {
            default: '0px',
            pill: '999999px'
        },
        space,
        sizes: space,
        fontSizes: fontSize
    },
    utils: {
        px: (value: ScaleValue<'space'>) => ({
            paddingLeft: value,
            paddingRight: value
        }),
        py: (value: ScaleValue<'space'>) => ({
            paddingTop: value,
            paddingBottom: value
        })
    }
})

export const lightTheme = createTheme({
    colors: {
        ...indigo,
        ...gray
    }
})
