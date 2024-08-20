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
    }
  },
  plugins: []
}
export default config
