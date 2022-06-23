import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../lib/theme'
import createEmotionCache from '../lib/createEmotionCache'
import { createContext, Dispatch, useState } from 'react'
import { ArticlesMap } from '../lib/api/article'
import { ExternalMetadata } from '../lib/api/externalMetadata'
import { Typography } from '@mui/material'
import { TextLink } from '../components/Link'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export const ArticlesContext = createContext(
  {} as {
    posts: ArticlesMap
    setPosts: Dispatch<React.SetStateAction<ArticlesMap>>
  },
)

export const ExternalMetadataContext = createContext(
  {} as {
    metadata: ExternalMetadata
    setMetadata: Dispatch<React.SetStateAction<ExternalMetadata>>
  },
)

const TopBar = (
  <Typography variant="body1" align="center" sx={{mt: '2rem', mb: '2rem'}}>
    <TextLink href='/' alt='top'/> {' '}
    <TextLink href='/articles' alt='articles'/> {' '}
    <TextLink href='/articles/tags' alt='tags'/>
    <TextLink href='/preview' alt='preview'/>
  </Typography>
)

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const initPosts: ArticlesMap = Object.create(null)
  const initMetadata: ExternalMetadata = Object.create(null)
  const [posts, setPosts] = useState(initPosts)
  const [metadata, setMetadata] = useState(initMetadata)
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ExternalMetadataContext.Provider value={{ metadata, setMetadata }}>
          <ArticlesContext.Provider value={{ posts, setPosts }}>
            {TopBar}
            <Component {...pageProps} />
          </ArticlesContext.Provider>
        </ExternalMetadataContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}
