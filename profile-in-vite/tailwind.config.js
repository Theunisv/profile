/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {          
              "primary": "#72a276",
                        
              "secondary": "#8AE9C1",
                        
              "accent": "#86CD82",
                        
              "neutral": "#BAF3D1",
                        
              "base-100": "#FBfff4",
              "dark": "#172118",
                        
              "info": "#009bff",
                        
              "success": "#00ffd9",
                        
              "warning": "#ee8900",
                        
              "error": "#ec004b",
          },
        },
      ],
    },
  plugins: [
    require('daisyui'),
  ],
}

