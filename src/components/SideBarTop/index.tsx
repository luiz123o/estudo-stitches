import React from 'react'
import { NavMenu } from '../NavMenu'

import * as S from './styles'

const SideBarTop = () => {
    const items = [
        {
            name: 'Home',
            link: '/',
            content: [
                {
                    title: 'About',
                    text: 'lorem ipsum dolor sit amet'
                }
            ]
        },
        {
            name: 'Conselho',
            link: '/',
            content: [
                {
                    title: 'Conselho',
                    text: 'teste de container'
                }
            ]
        },

        {
            name: 'Contact',
            link: '/contact',
            content: [
                {
                    title: 'Contact',
                    text: 'lorem ipsum dolor sit amet'
                },
                {
                    title: 'Contact2',
                    text: 'lorem ipsum dolor sit amet'
                }
            ]
        },
        {
            name: 'About',
            link: '/about'
        }
    ]
    return (
        <S.SideBarTopContainer>
            <S.Image src="assets/svg/renovada-complete-white.svg" />
            <NavMenu items={items} />
        </S.SideBarTopContainer>
    )
}

export default SideBarTop
