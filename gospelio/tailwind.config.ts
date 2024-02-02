import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors:{
      
     },
    },
    screens:{
      "xxs": "320px",
      "xs": "480px",
      "sm": "640px",
      "md": "768px",
     "ssmd":"810px",
      "smd":"800px",
      "xsmd":"850px",
      "xmd":"903px",
      "dxl":"900px",
      "txl":"1000px",
      "lg": "1024px",
      "pxl":"1026px",
      "nxl":"1130px",
      "mxl":"1133px",
      "xl": "1280px",
      "2xl": "1536px",
    }
  },
  plugins: [],
}
export default config
