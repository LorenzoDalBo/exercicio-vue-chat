/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'cor-primaria': 'var(--cor-primaria)',
        'cor-fundo': 'var(--cor-fundo)',
        'cor-destaque': 'var(--cor-destaque)',
        'cor-texto' : 'var(--cor-texto)',
        'cor-secundaria' : 'var(--cor-secundaria)',
        'cor-hover' : 'var(--cor-hover)',
        'cor-chat' : 'var(--cor-chat)'

      }
    },
  },
  plugins: [],
};

