module.exports = {
  purge: {
    layers: ['utilities'],
    content: ['./components/**/*.js', './pages/**/*.js']
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
};