export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        'last 2 versions',
        '> 0.5%',
        'not dead',
        'not op_mini all',
        'Chrome >= 87',
        'Safari >= 13',
        'Firefox >= 78',
        'Edge >= 88',
        'iOS >= 13',
        'Android >= 87',
        'Samsung >= 12',
        'UCAndroid >= 12.12'
      ],
      grid: 'autoplace',
      flexbox: 'no-2009'
    },
  },
}
