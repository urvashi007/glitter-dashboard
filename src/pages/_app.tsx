'use client';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Manrope, Jost } from 'next/font/google';
import theme from '../../utils/theme';



const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${manrope.variable} ${jost.variable}`}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <style jsx global>{`
          html {
            font-family: var(--font-manrope), sans-serif;
          }
          body {
            overflow-x: hidden;
          }
        `}</style>
      </ThemeProvider>
    </main>
  );
}
