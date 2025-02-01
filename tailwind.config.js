// tailwind.config.js
/* eslint-env node */
export default  = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", // Add paths to all your template files
];
export const theme = {
  extend: {
    // Add custom screen sizes
    screens: {
      'xs': '400px', // Extra small screens
      'sm': '640px', // Small screens
      'md': '768px', // Medium screens
      'lg': '1024px', // Large screens
      'xl': '1280px', // Extra large screens
      '2xl': '1536px', // 2X large screens
      'custom': '900px', // Custom screen size
    },
  },
};
export const plugins = [];