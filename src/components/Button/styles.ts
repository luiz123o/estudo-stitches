import { iprStyled } from '../../styles'

export const Button = iprStyled('button', {
    appearance: 'none',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',

    variants: {
        size: {
            1: {
                height: '$24',
                fontSize: 12
            }
        },
        variant: {
            primary: {
                backgroundColor: '$gray1',
                color: '#f1f1f5',
                '&:hover': {
                    backgroundColor: '$gray10',
                    color: '#f1f1f5'
                }
            }
        },
        pill: {
            true: {
                borderRadius: '$pill'
            }
        },
        outlined: {
            true: {
                border: '1px solid'
            }
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: '1',
        pill: true
    }
})
