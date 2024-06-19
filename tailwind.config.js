/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
     colors: {
      'white': '#ffffff',
      'backgroundColor' : "#E2E6E8",
      },
      spacing: {
        sm: '10px',
        md: '20px',
        lg: '30px',
        xl: '40px',
      }
  },
  plugins: [],
}

