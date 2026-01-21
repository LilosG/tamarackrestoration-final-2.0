/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // ===================
      // BRAND COLORS
      // ===================
      colors: {
        brand: {
          // Primary Orange - CTAs, accents, highlights
          orange: {
            DEFAULT: '#dc6830',
            50: '#fef6f0',
            100: '#fdeadc',
            200: '#fad2b8',
            300: '#f6b48a',
            400: '#f08c55',
            500: '#dc6830', // Base
            600: '#c75524',
            700: '#a5421e',
            800: '#85361f',
            900: '#6d2f1c',
            950: '#3b150c',
          },
          // Black - Headlines, primary text
          black: {
            DEFAULT: '#000103',
            50: '#f6f6f6',
            100: '#e7e7e7',
            200: '#d1d1d1',
            300: '#b0b0b0',
            400: '#888888',
            500: '#6d6d6d',
            600: '#5d5d5d',
            700: '#4f4f4f',
            800: '#454545',
            900: '#3d3d3d',
            950: '#000103', // Base
          },
          // Cream - Backgrounds
          cream: {
            DEFAULT: '#eeede9',
            50: '#fafaf9',
            100: '#f5f5f3',
            200: '#eeede9', // Base
            300: '#e0ddd6',
            400: '#ccc7bc',
            500: '#b5aea0',
            600: '#9f9586',
            700: '#847a6d',
            800: '#6d655b',
            900: '#5a544c',
            950: '#2f2c27',
          },
          // Gray - Secondary text, borders
          gray: {
            DEFAULT: '#60605f',
            light: '#bab2aa',
          },
        },
        // Semantic colors
        success: {
          DEFAULT: '#22c55e',
          50: '#f0fdf4',
          500: '#22c55e',
          700: '#15803d',
        },
        warning: {
          DEFAULT: '#eab308',
          50: '#fefce8',
          500: '#eab308',
          700: '#a16207',
        },
        error: {
          DEFAULT: '#ef4444',
          50: '#fef2f2',
          500: '#ef4444',
          700: '#b91c1c',
        },
        info: {
          DEFAULT: '#3b82f6',
          50: '#eff6ff',
          500: '#3b82f6',
          700: '#1d4ed8',
        },
      },

      // ===================
      // TYPOGRAPHY
      // ===================
      fontFamily: {
        display: [
          'Archivo Black',
          'Impact',
          'Haettenschweiler',
          'Arial Narrow Bold',
          'sans-serif',
        ],
        heading: [
          'Archivo',
          'Arial Black',
          'Arial Bold',
          'sans-serif',
        ],
        body: [
          'Source Sans 3',
          'Source Sans Pro',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'Monaco',
          'monospace',
        ],
      },

      // Fluid typography scale
      fontSize: {
        // Display sizes - for hero headlines
        'display-2xl': [
          'clamp(2.75rem, 5vw + 1rem, 4.5rem)',
          { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '900' },
        ],
        'display-xl': [
          'clamp(2.25rem, 4vw + 0.75rem, 3.75rem)',
          { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '900' },
        ],
        'display-lg': [
          'clamp(1.875rem, 3vw + 0.5rem, 3rem)',
          { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '800' },
        ],
        'display-md': [
          'clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)',
          { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' },
        ],
        'display-sm': [
          'clamp(1.25rem, 2vw + 0.25rem, 1.75rem)',
          { lineHeight: '1.3', fontWeight: '700' },
        ],
        // Body sizes
        'body-xl': ['1.25rem', { lineHeight: '1.75' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body-md': ['1rem', { lineHeight: '1.75' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5' }],
      },

      // ===================
      // SPACING SYSTEM
      // ===================
      spacing: {
        // Section spacing (vertical padding)
        'section-sm': 'clamp(2rem, 5vw, 4rem)',
        'section-md': 'clamp(3rem, 8vw, 6rem)',
        'section-lg': 'clamp(4rem, 10vw, 8rem)',
        'section-xl': 'clamp(5rem, 12vw, 10rem)',
        // Container padding
        'container-x': 'clamp(1rem, 5vw, 2rem)',
      },

      // ===================
      // MAX WIDTHS
      // ===================
      maxWidth: {
        'content': '65ch', // Optimal reading width
        'content-wide': '75ch',
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1280px',
        'container-2xl': '1440px',
      },

      // ===================
      // BORDER RADIUS
      // ===================
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },

      // ===================
      // SHADOWS
      // ===================
      boxShadow: {
        'soft-sm': '0 1px 2px 0 rgba(0, 1, 3, 0.05)',
        'soft': '0 1px 3px 0 rgba(0, 1, 3, 0.1), 0 1px 2px -1px rgba(0, 1, 3, 0.1)',
        'soft-md': '0 4px 6px -1px rgba(0, 1, 3, 0.1), 0 2px 4px -2px rgba(0, 1, 3, 0.1)',
        'soft-lg': '0 10px 15px -3px rgba(0, 1, 3, 0.1), 0 4px 6px -4px rgba(0, 1, 3, 0.1)',
        'soft-xl': '0 20px 25px -5px rgba(0, 1, 3, 0.1), 0 8px 10px -6px rgba(0, 1, 3, 0.1)',
        'soft-2xl': '0 25px 50px -12px rgba(0, 1, 3, 0.25)',
        // Card shadows
        'card': '0 1px 3px rgba(0, 1, 3, 0.08), 0 4px 12px rgba(0, 1, 3, 0.05)',
        'card-hover': '0 4px 12px rgba(0, 1, 3, 0.12), 0 8px 24px rgba(0, 1, 3, 0.08)',
        // Button shadows
        'button': '0 1px 2px rgba(0, 1, 3, 0.1), 0 2px 4px rgba(220, 104, 48, 0.15)',
        'button-hover': '0 2px 4px rgba(0, 1, 3, 0.12), 0 4px 8px rgba(220, 104, 48, 0.2)',
      },

      // ===================
      // TRANSITIONS
      // ===================
      transitionDuration: {
        DEFAULT: '200ms',
        fast: '150ms',
        normal: '200ms',
        slow: '300ms',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },

      // ===================
      // ANIMATIONS
      // ===================
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-in-up': 'fade-in-up 0.4s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.3s ease-out',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },

      // ===================
      // Z-INDEX SCALE
      // ===================
      zIndex: {
        'behind': '-1',
        'base': '0',
        'raised': '10',
        'dropdown': '100',
        'sticky': '200',
        'overlay': '300',
        'modal': '400',
        'toast': '500',
        'max': '999',
      },

      // ===================
      // ASPECT RATIOS
      // ===================
      aspectRatio: {
        'hero': '16 / 9',
        'card': '4 / 3',
        'square': '1 / 1',
        'portrait': '3 / 4',
        'video': '16 / 9',
      },
    },
  },
  plugins: [],
};
