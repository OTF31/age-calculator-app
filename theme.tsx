'use client'

import { MantineThemeOverride, createTheme } from '@mantine/core'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '800'] })

const theme: MantineThemeOverride = createTheme({
  breakpoints: { xs: '23.4375em', xl: '90em' },
  fontFamily: poppins.style.fontFamily,
  colors: {
    mattBlack: [
      '#E8E8E8',
      'D0D0D0',
      '#B9B9B9',
      '#A1A1A1',
      '#737373',
      '#444444',
      '#151515',
      '#111111',
      '#0D0D0D',
      '#080808',
    ],
    purpleHoneycreeper: [
      '#F3EDFF',
      '#E7DBFF',
      '#DACAFF',
      '#CEB8FF',
      '#B694FF',
      '#9D71FF',
      '#854DFF',
      '#6A3ECC',
      '#502E99',
      '#351F66',
    ],
    snowflake: [
      '#FEFEFE',
      '#FCFCFC',
      '#FBFBFB',
      '#F9F9F9',
      '#F6F6F6',
      '#F3F3F3',
      '#F0F0F0',
      '#C0C0C0',
      '#909090',
      '#606060',
    ],
    dugong: [
      '#F1F1F1',
      '#E3E2E2',
      '#D4D4D4',
      '#C6C5C5',
      '#AAA9A9',
      '#8D8C8C',
      '#716F6F',
      '#5A5959',
      '#444343',
      '#2D2C2C',
    ],
    gainsboro: [
      '#FCFCFC',
      '#F8F8F8',
      '#F5F5F5',
      '#F1F1F1',
      '#EAEAEA',
      '#E3E3E3',
      '#DCDCDC',
      '#B0B0B0',
      '#848484',
      '#585858',
    ],
    grapefruit: [
      '#FFEEEE',
      '#FFDEDE',
      '#FFCDCD',
      '#FFBDBD',
      '#FF9B9B',
      '#FF7A7A',
      '#FF5959',
      '#CC4747',
      '#993535',
      '#662424',
    ],
  },
})

export { theme }
