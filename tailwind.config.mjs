/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Memoresse Brand Color Hierarchy
        memoresse: {
          // PRIMARY: Sage Whisper - Assistant elements, main UI
          'sage-whisper': '#b2c7b9',
          'sage-whisper-light': '#c5d4cb',
          'sage-whisper-dark': '#9fb8a7',
          
          // SECONDARY: Dusty Plum - User elements, buttons, interactive
          'dusty-plum': '#8d6e8d',
          'dusty-plum-light': '#a389a3',
          'dusty-plum-dark': '#705670',
          
          // TERTIARY: Lavender Mist - Supporting elements, accents
          'lavender-mist': '#cdc6dd',
          'lavender-mist-light': '#ddd8e6',
          'lavender-mist-dark': '#bbb1cc',
          
          // NEUTRAL: Memory Stone - Subtle text, non-emphasized UI
          'memory-stone': '#a8a4aa',
          'memory-stone-light': '#bbb8bb',
          'memory-stone-dark': '#908d93',
          
          // Supporting colors for contrast and accessibility
          'off-white': '#fafafa',
          'stone-ink': '#2a2628',
          'warm-white': '#f8f7f6',
        }
      },
      fontFamily: {
        // Headings: Recoleta - Professional warmth
        'heading': ['Recoleta', 'serif'],
        
        // Chat Text: PT Serif Enhanced - Superior readability
        'chat': ['PT Serif Enhanced', 'PT Serif', 'serif'],
        
        // Marketing/Content: Libre Baskerville - Classic, timeless
        'content': ['Libre Baskerville', 'serif'],
        
        // System fallbacks
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Libre Baskerville', 'serif'],
      },
      fontSize: {
        // Typography scale optimized for 16×9 brand pages
        'brand-hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'brand-title': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'brand-subtitle': ['1.5rem', { lineHeight: '1.3' }],
        'brand-body': ['1.125rem', { lineHeight: '1.6' }],
        'brand-caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        // Custom spacing based on 16×9 proportions
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      aspectRatio: {
        // Brand guidebook standard ratio
        'brand': '16 / 9',
      },
      animation: {
        // Brand-appropriate animations
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-gentle': 'scaleGentle 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleGentle: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        // Brand-specific easing
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        // Soft, brand-appropriate shadows
        'brand-soft': '0 4px 12px rgba(178, 199, 185, 0.15)',
        'brand-medium': '0 8px 24px rgba(178, 199, 185, 0.2)',
        'brand-strong': '0 16px 48px rgba(178, 199, 185, 0.25)',
        'plum-soft': '0 4px 12px rgba(141, 110, 141, 0.15)',
      },
      backdropBlur: {
        'brand': '12px',
      },
    },
  },
  plugins: [],
}

