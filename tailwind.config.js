/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.vue'
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark']
  },
	theme: {
		extend: {
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			},
			animation: {
				fadeIn: 'fadeIn 2s ease-in-out',
				fadeInDelayed: 'fadeIn 1s 2s ease-in-out forwards',
				fadeInDelayedMore: 'fadeIn 1s 2.5s ease-in-out forwards'
			}
		}
	}
}
