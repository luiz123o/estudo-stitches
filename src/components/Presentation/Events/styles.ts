import { iprStyled } from '../../../styles'
import { CalendarIcon } from '@radix-ui/react-icons'

export const EventsContainer = iprStyled('div', {
    display: 'flex',
    gap: '$8',
    width: 'fit-content',
    padding: '$8 $16',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '2px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    border: 'none'
})

export const Calendar = iprStyled(CalendarIcon, {})

export const EventDate = iprStyled('span', {
    display: 'flex',
    fontSize: '$8',
    color: '$gray11'
})
