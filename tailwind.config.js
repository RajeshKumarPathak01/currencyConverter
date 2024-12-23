/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust based on your project structure
    './public/index.html',             // Add additional paths if needed
  ],
  theme: {
    extend: {
      screens:{
        sm: { raw: "(max-width: 768px)" },
        md: { raw: "(min-width: 446px) and (max-width: 1082px)" },
      }
    },
  },
  plugins: [],
}

