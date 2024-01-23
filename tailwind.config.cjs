/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
	theme: {
		extend: {
      screens: {
        // fix hover on mobile
        'hover-hover': {'raw': '(hover: hover)'},
      },
      fontFamily: {
        'Raleway': ['Raleway', 'cursive'],
      },
      width: {
        fullhd: '1920px'
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      
      '3xl': '1930px',
      // => @media (min-width: 1280px) { ... }
    },
	},
	plugins: [
		require("daisyui"),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	],
}
