/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const rotateX = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
    });
});
module.exports = {
    content: [
        // './src/pages/*/.{js,ts,jsx,tsx,mdx}',
        // './src/components/*/.{js,ts,jsx,tsx,mdx}',
        // './src/app/*/.{js,ts,jsx,tsx,mdx}',
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1142px',
            xxl:'1520px',
        },
        fontFamily: {
            custom: ['var(--font-custom)'] ,
        },

        extend: {
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray'),
                        fontSize: '1.125rem',
                    },
                },
            }),
            fontFamily: {
                mulish: ['var(--font-mulish)'],

            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                white: '#ffffff',
                black: '#08111F',
                primary: '#126BC5',  // '#47BDFF',
                secondary: '#0f5095',  // '#B476E5',
                gray: {
                    DEFAULT: '#7780A1',
                    dark: '#1C2331',
                    headinglight: "#98A2B3",
                    textgray: "#777E90",
                    blackgray: "#0C111D",
                },
                buttonblue: "#126BC5",
                darkblue:'#0f5095'
            },

        },
    },
    // eslint-disable-next-line no-undef
    plugins: [
        // require('@tailwindcss/line-clamp'), 
        rotateX, require('@tailwindcss/typography'),
        require('tailwind-scrollbar'),
        // require("tw-elements/dist/plugin.cjs")
    ],
}