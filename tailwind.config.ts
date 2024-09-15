import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      main: '#437254',
      secondary: '#e5e5e5',
      kurashiX: '#F6F5F5',
      kurashiT: '#CCE2ED',
      kurashiB: '#F6EFD7'
    },
    extend: {
      boxShadow: {
        kurashi: 'inset 0 0 0 0.2rem rgba(0, 0, 0, 0.5)'
      },
      backgroundColor: {
        'kurashi-black': 'rgba(0, 0, 0, 0.2)'
      }
    }
  },
  plugins: []
}
export default config
