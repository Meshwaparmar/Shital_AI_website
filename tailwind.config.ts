import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        navy: {
          50: 'hsl(var(--navy-50))',
          100: 'hsl(var(--navy-100))',
          200: 'hsl(var(--navy-200))',
          300: 'hsl(var(--navy-300))',
          400: 'hsl(var(--navy-400))',
          500: 'hsl(var(--navy-500))',
          600: 'hsl(var(--navy-600))',
          700: 'hsl(var(--navy-700))',
          800: 'hsl(var(--navy-800))',
          900: 'hsl(var(--navy-900))',
          950: 'hsl(var(--navy-950))',
        },
        blue: {
          50: 'hsl(var(--blue-50))',
          100: 'hsl(var(--blue-100))',
          200: 'hsl(var(--blue-200))',
          300: 'hsl(var(--blue-300))',
          400: 'hsl(var(--blue-400))',
          500: 'hsl(var(--blue-500))',
          600: 'hsl(var(--blue-600))',
          700: 'hsl(var(--blue-700))',
          800: 'hsl(var(--blue-800))',
          900: 'hsl(var(--blue-900))',
        },
        indigo: {
          50: 'hsl(var(--indigo-50))',
          100: 'hsl(var(--indigo-100))',
          200: 'hsl(var(--indigo-200))',
          300: 'hsl(var(--indigo-300))',
          400: 'hsl(var(--indigo-400))',
          500: 'hsl(var(--indigo-500))',
          600: 'hsl(var(--indigo-600))',
          700: 'hsl(var(--indigo-700))',
        },
        orange: {
          50: 'hsl(var(--orange-50))',
          100: 'hsl(var(--orange-100))',
          200: 'hsl(var(--orange-200))',
          300: 'hsl(var(--orange-300))',
          400: 'hsl(var(--orange-400))',
          500: 'hsl(var(--orange-500))',
          600: 'hsl(var(--orange-600))',
          700: 'hsl(var(--orange-700))',
          800: 'hsl(var(--orange-800))',
          900: 'hsl(var(--orange-900))',
          950: 'hsl(var(--orange-950))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'drift': 'drift 5s ease-in-out infinite',
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '90rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
