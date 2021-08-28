module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    // fontFamily: {
    //   inter: ['Inter', 'sans-serif']
    // },
    extend: {
      zIndex: {
        '1': '1',
        '-1': '-1',
      },
      minWidth: {
        '20': '5.5rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '96': '24rem'
      },
      maxWidth: {
        '10xl': '100rem'
      },
      maxHeight: {
        '40': '10rem',
      },
      minHeight: {
        '12': '3rem',
        '56': '14rem',
        '96': '24rem',
        '100': '28rem'
      },
      backgroundImage: theme => ({
        'office': "url('../images/office.jpg')"
      }),
      colors: {
        neutral: '#8a8a8a',
        primary: '#1aceff',
        accent: '#f79e02',
        success: '#39b54a',
        danger: '#f65656',
        warning: '#f7d300',
        dark: '#030407',
        light: '#ffffff',
        'neutral-l': {
          1: '#f3f3f3',
          2: '#e9e9e9',
          3: '#dedede',
          4: '#d4d4d4',
          5: '#c9c9c9',
          6: '#bfbfbf',
          7: '#b4b4b4',
          8: '#aaaaaa',
          9: '#9f9f9f',
          10: '#959595'
        },
        'neutral-d': {
          1: '#7e7e7e',
          2: '#717171',
          3: '#656565',
          4: '#585858',
          5: '#4c4c4c',
          6: '#3f3f3f',
          7: '#333333',
          8: '#272727',
          9: '#1a1a1a',
          10: '#0e0e0e'
        },
        'primary-l': {
          1: '#e8faff',
          2: '#d3f6ff',
          3: '#bff1ff',
          4: '#aaedff',
          5: '#96e8ff',
          6: '#81e4ff',
          7: '#6ce0ff',
          8: '#58dbff',
          9: '#43d7ff',
          10: '#2fd2ff'
        },
        'primary-d': {
          1: '#18bbe8',
          2: '#15a9d1',
          3: '#1396ba',
          4: '#1184a3',
          5: '#0e718c',
          6: '#0c5f75',
          7: '#0a4c5e',
          8: '#073a47',
          9: '#052730',
          10: '#031519'
        },
        'accent-l': {
          1: '#fef5e6',
          2: '#fdedcf',
          3: '#fde4b8',
          4: '#fcdba1',
          5: '#fbd28b',
          6: '#fbca74',
          7: '#fac15d',
          8: '#f9b846',
          9: '#f8af30',
          10: '#f8a719'
        },
        'accent-d': {
          1: '#e19002',
          2: '#cb8202',
          3: '#b47301',
          4: '#9e6501',
          5: '#885701',
          6: '#724901',
          7: '#5b3a01',
          8: '#452c01',
          9: '#2f1e00',
          10: '#191000'
        },
        'success-l': {
          1: '#ebf8ed',
          2: '#d9f1dd',
          3: '#c8eacc',
          4: '#b6e4bc',
          5: '#a4ddac',
          6: '#92d69b',
          7: '#80d08b',
          8: '#6ec97b',
          9: '#5dc26b',
          10: '#4bbc5a'
        },
        'success-d': {
          1: '#34a543',
          2: '#2f943d',
          3: '#2a8436',
          4: '#24742f',
          5: '#1f6429',
          6: '#1a5322',
          7: '#15431b',
          8: '#103315',
          9: '#0b220e',
          10: '#061207'
        },
        'danger-l': {
          1: '#feeeee',
          2: '#fddfdf',
          3: '#fcd0d0',
          4: '#fcc0c0',
          5: '#fbb1b1',
          6: '#faa2a2',
          7: '#f99393',
          8: '#f88484',
          9: '#f87474',
          10: '#f76565'
        },
        'danger-d': {
          1: '#e04e4e',
          2: '#ca4747',
          3: '#b43f3f',
          4: '#9d3737',
          5: '#872f2f',
          6: '#712828',
          7: '#5b2020',
          8: '#451818',
          9: '#2f1010',
          10: '#190909'
        },
        'warning-l': {
          1: '#fefbe6',
          2: '#fdf7cf',
          3: '#fdf3b8',
          4: '#fcefa1',
          5: '#fbeb8a',
          6: '#fbe773',
          7: '#fae35c',
          8: '#f9df45',
          9: '#f8db2e',
          10: '#f8d717'
        },
        'warning-d': {
          1: '#e1c000',
          2: '#cbad00',
          3: '#b49a00',
          4: '#9e8700',
          5: '#887400',
          6: '#726100',
          7: '#5b4e00',
          8: '#453b00',
          9: '#2f2800',
          10: '#191500'
        },
        'dark-l': {
          1: '#e6e6e6',
          2: '#cfcfd0',
          3: '#b8b9ba',
          4: '#a2a2a3',
          5: '#8b8c8d',
          6: '#747577',
          7: '#5e5e60',
          8: '#47484a',
          9: '#303134',
          10: '#1a1b1d'
        },
        'dark-d': {
          1: '#030406',
          2: '#020306',
          3: '#020305',
          4: '#020304',
          5: '#020204',
          6: '#010203',
          7: '#010103',
          8: '#010102',
          9: '#010101',
          10: '#000001'
        },
        'light-d': {
          1: '#fcfcfc',
          2: '#fafafa',
          3: '#f7f7f7',
          4: '#f5f5f5',
          5: '#f2f2f2',
          6: '#f0f0f0',
          7: '#ededed',
          8: '#ebebeb',
          9: '#e8e8e8',
          10: '#e6e6e6'
        }
      }
    },
  },
  variants: {
    extend: {
      grayscale: ['group-hover'],
      scale: ['group-hover'],
      height: ['hover'],
      ringWidth: ['hover']
    },
  },
  plugins: [],
}