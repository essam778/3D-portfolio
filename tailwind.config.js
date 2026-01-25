module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        "black-100": "var(--black-100)",
        "black-200": "var(--black-200)",
        "white-100": "var(--white-100)",
      },
      boxShadow: {
        card: '0 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': `url(/herobg.png)`,
      },
    },
  },
  plugins: [],
};
