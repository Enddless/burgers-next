import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-gradient': 'linear-gradient(95.61deg, #DA8023 0%, #E2B438 100%)'
      },
      zIndex: {
        '1': '1'
      },
      backgroundColor: {
        'custom-black': '#211A16',
        'custom-input-bg': '#211A16'
      },
      borderColor: {
        'custom-black': '#353535'
      },
      width: {
        'custom-width-input-wrapper': '344px',
        'custom-width-input': '342px'
      }
    }
  },
  plugins: []
};
export default config;

