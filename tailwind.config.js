/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './static/html/*.html'],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("/images/checkmark.svg")',
      },
      backgroundImage: {
        'checkmark': "url('/images/checkmark.svg')",
      },
      backgroundPosition: {
        'left-center': 'left center',
      },
    },
  },
  plugins: [],
}