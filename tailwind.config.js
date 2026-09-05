/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0B0D14',
        'bg-surface': '#14171F',
        'bg-surface-2': '#1B1F2B',
        'border-hairline': '#262B3A',
        'text-primary': '#F1F2F6',
        'text-secondary': '#8B90A3',
        'accent': '#7C6CF0',
        'accent-hover': '#6958E8',
        'safe': '#7C6CF0',
        'warning': '#F5A623',
        'emergency': '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        card: '10px',
        btn: '10px',
        input: '6px',
        badge: '6px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.4)',
        'focus-accent': '0 0 0 2px #7C6CF0',
      }
    },
  },
  plugins: [],
}
