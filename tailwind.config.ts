import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      main: '#A2272A',
      black: 'rgba(0, 0, 0, 0.76)',
      blog: '#D9D9D9',
      secondary: '#e5e5e5',
      'secondary-opacity': 'rgba(229, 229, 229, 0.7)',
      'secondary-lg-opacity': 'rgba(229, 229, 229, 0.8)',
      kurashiX: '#F6F5F5',
      kurashiT: '#CCE2ED',
      kurashiB: '#F6EFD7',
      'kurashi-bg-main': '#f4f4f4',
      'kurashi-border': '#D9D9D9',
      'count-bg': '#BCE3C9',
      'count-text': '#253D4E',
      'main-phu-kien': '#9EB8A0',
      'text-phu-kien': '#424143',
      'kurashi-border-color': 'rgba(134,135,135,0.2)'
    },
    extend: {
      boxShadow: {
        kurashi: 'inset 0 0 0 0.2rem rgba(0, 0, 0, 0.5)'
      },
      backgroundColor: {
        'kurashi-black': 'rgba(0, 0, 0, 0.25)'
      },
      typography: {
        DEFAULT: {
          css: {
            'p[style*="text-align:center"] > img': {
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'inline-block'
            }
          }
        }
      }
    },
    fontFamily: {
      body: ['Futura'],
      gtFont: ['var(--font-gtFont)']
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
export default config
