import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    pink: '#FFB6C1',
                    mint: '#B5EAD7',
                    lavender: '#E0BBE4',
                    cream: '#FFF9F5',
                    dark: '#2C2C2C',
                    sparkle: '#FF8FB1',
                },
            },
            fontFamily: {
                comic: ['var(--font-comic)', 'system-ui', 'sans-serif'],
                poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                '3xl': '24px',
            },
            boxShadow: {
                kawaii: '0 10px 30px rgba(255, 182, 193, 0.3)',
                'kawaii-hover': '0 15px 40px rgba(255, 182, 193, 0.4)',
            },
            animation: {
                float: 'float 3s ease-in-out infinite',
                'float-delayed': 'float 3s ease-in-out 1.5s infinite',
                sparkle: 'sparkle 2s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                sparkle: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.5', transform: 'scale(1.2)' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
