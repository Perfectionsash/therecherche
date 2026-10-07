/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bone: '#f2edde',
        rust: '#af6446',
        ink: '#000000',
        canvas: 'var(--color-canvas, #f2edde)',
        surface: 'var(--color-surface, #f2edde)',
        accent: 'var(--color-accent, #af6446)',
        border: 'var(--color-border, #000000)',
      },
      fontFamily: {
        display: ['Scto Grotesk A', 'Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Merlo', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Merlo', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        caption: ['14px', { lineHeight: '1.29' }],
        'body-sm': ['16px', { lineHeight: '1.5' }],
        subheading: ['26px', { lineHeight: '1.23' }],
        display: ['60px', { lineHeight: '1.29' }],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
      },
      spacing: {
        '10': '10px',
        '12': '12px',
        '20': '20px',
        '60': '60px',
      },
      borderRadius: {
        'none': '0px',
      },
      maxWidth: {
        'full': '100%',
      },
    },
  },
  plugins: [],
}