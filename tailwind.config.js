/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#102a4e',
        'brand-navy-dark': '#0a1c35',
        'brand-navy-light': '#163b65',
        'brand-cyan': '#21b5c6',
        'brand-cyan-hover': '#1ca0b0',
        'brand-cyan-light': '#eaf7f9',
        'brand-gold': '#f5a623',
        'brand-emergency': '#2080f6',
        'brand-teal': '#26b9cc',
        'brand-gray-text': '#5d7186',
        'brand-border': '#e5e9f0',
        'brand-bg-light': '#f8fafc',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(16, 42, 78, 0.08)',
        'floating': '0 20px 40px -10px rgba(16, 42, 78, 0.12)',
      }
    },
  },
  plugins: [],
}
