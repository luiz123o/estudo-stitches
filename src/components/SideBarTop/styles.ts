import { convertToRem, iprStyled } from '../../styles'

export const SideBarTopContainer = iprStyled('div', {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '$8',
    backgroundColor: '$gray4'
})
export const Image = iprStyled('img', {
    height: convertToRem(30),
    opacity: 0.8,
    paddingLeft: '$16'
})
