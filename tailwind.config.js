import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
        serifDisplay: ['Merriweather', 'serif'],
      },
      boxShadow: {
        glow: '0 20px 60px rgba(56, 189, 248, 0.24)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        portfolio: {
          primary: '#22d3ee',
          secondary: '#4ade80',
          accent: '#f59e0b',
          neutral: '#0f172a',
          'base-100': '#020617',
          info: '#38bdf8',
          success: '#4ade80',
          warning: '#fbbf24',
          error: '#f43f5e',
        },
      },
    ],
  },
}

