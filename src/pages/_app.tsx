import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Component {...pageProps} />
            {globalStyles()}
        </>
    )
}
export default App
