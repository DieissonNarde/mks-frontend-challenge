import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@/redux/store'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
