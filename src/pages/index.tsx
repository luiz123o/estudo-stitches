import type { NextPage } from 'next'
import Presentation from '../components/Presentation'
import SideBarTop from '../components/SideBarTop'

const Home: NextPage = () => {
    return (
        <>
            <SideBarTop />
            <Presentation />
        </>
    )
}

export default Home
