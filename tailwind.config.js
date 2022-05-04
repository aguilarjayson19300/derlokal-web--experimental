module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'primary': '#243699',
      'primary2': '#4D78E2',
      'primary3': '#809FEB',
      'primary4': '#B3C5F3',
      'primary5': '#F3F5FD',
      'primary6': '#E5ECFB',
      'primary7': '#F2F5FD',
      'secondary': '#0D132F',
      'secondary2': '#565A6D',
      'secondary3': '#868997',
      'secondary4': '#B6B8C1',
      'secondary5': '#CFD0D5',
      'secondary6': '#E7E7EA',
      'secondary7': '#F3F3F5',
      'danger': '#C81E00',
      'danger2': '#E5644D',
      'danger3': '#EC9080',
      'danger4': '#F8D3CC',
      'danger5': '#FBE9E5',
      'danger6': '#FDF4F2',
      'success': '#33B272',
      'success2': '#70C99C',
      'success3': '#99D8B8',
      'success4': '#C2E8D5',
      'success5': '#D6F0E3',
      'success6': '#EBF7F1',
      'warning': '#F4AD42',
      'warning2': '#F7C67B',
      'warning3': '#F9D6A0',
      'warning4': '#FCE6C6',
      'warning5': '#FDEFD9',
      'warning6': '#FEF7EC',
      'blue': '#0071E4',
      'blue2': '#4D9CEC',
      'blue3': '#80B8F1',
      'blue4': '#B3D4F7',
      'blue5': '#CCE3FA',
      'blue6': '#E5F1FC',
      'blue7': '#F2F8FE',
      'yellow': '#FABD1F',
      'yellow2': '#FBD162',
      'yellow3': '#FCDE8F',
      'yellow4': '#FEEBBC',
      'yellow5': '#FEF2D2',
      'yellow6': '#FFF8E9',
      'yellow7': '#FFFCF4',
      'orange': '#F84D05',
      'orange2': '#FA8250',
      'orange3': '#FBA682',
      'orange4': '#FDCAB4',
      'orange5': '#FEDBCD',
      'orange6': '#FEEDE6',
      'orange7': '#FFF6F2',
      'textIcon': '#253454',
      'textIcon2': '#667187',
      'textIcon3': '#9299A9',
      'textIcon4': '#BEC2CC',
      'textIcon5': '#D3D6DD',
      'textIcon6': '#E9EBEE',
      'textIcon7': '#FFFFFF',
    },
    fontFamily: {
      'sans': ['"Noto Sans KR"', '"Noto Sans"']
    },
    extend: {
      fontSize: {
        '2xs': ['11px', {
          'line-height': '16px'
        }],
        'xs': ['13px', {
          'line-height': '19px'
        }],
        'sm': ['16px', {
          'line-height': '22px'
        }],
        'lg': ['18px', {
          'line-height': '25px'
        }],
        'xl': ['24px', {
          'line-height': '34px'
        }],
        '2xl': ['32px', {
          'line-height': '46px'
        }],
        '3xl': ['40px', {
          'line-height': '58px'
        }],
        '4xl': ['48px', {
          'line-height': '70px'
        }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}