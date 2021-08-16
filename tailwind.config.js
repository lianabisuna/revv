module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    // fontFamily: {
    //   inter: ['Inter', 'sans-serif']
    // },
    extend: {
      colors: {
        blue: {
          1: '#e5faff',
          2: '#b3efff',
          3: '#80e4ff',
          4: '#4dd9ff',
          5: '#1aceff',
          6: '#00b4e6',
          7: '#008cb3',
          8: '#006480',
          9: '#003c4d',
          10: '#00141a'
        },
        black: {
          1: '#344b79',
          2: '#344b79',
          3: '#2e426b',
          4: '#28395d',
          5: '#22314f',
          6: '#1c2840',
          7: '#151f32',
          8: '#0f1624',
          9: '#090d15',
          10: '#030407'
        },
        gray: {
          1: '#fafafa',
          2: '#f0f0f0',
          3: '#f0f0f0',
          4: '#dbdbdb',
          5: '#d1d1d1',
          6: '#c7c7c7',
          7: '#bdbdbd',
          8: '#b3b3b3',
          9: '#a8a8a8',
          10: '#9e9e9e',
          11: '#949494',
          12: '#8a8a8a',
          13: '#808080',
          14: '#757575',
          15: '#616161'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}