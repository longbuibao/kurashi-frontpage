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
      black: 'rgba(0, 0, 0, 0.76)',
      blog: '#D9D9D9',
      secondary: '#e5e5e5',
      'secondary-opacity': 'rgba(229, 229, 229, 0.7)',
      'secondary-lg-opacity': 'rgba(229, 229, 229, 0.8)',
      kurashiX: '#F6F5F5',
      kurashiT: '#CCE2ED',
      kurashiB: '#F6EFD7',
      'kurashi-bg-main': '#f4f4f4'
    },
    extend: {
      boxShadow: {
        kurashi: 'inset 0 0 0 0.2rem rgba(0, 0, 0, 0.5)'
      },
      backgroundColor: {
        'kurashi-black': 'rgba(0, 0, 0, 0.4)'
      }
    }
  },
  plugins: []
}
export default config
