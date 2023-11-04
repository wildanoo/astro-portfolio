module.exports = {
    // plugin: [
    //     require('postcss-preset-env')({
    //         stage: 0
    //     }),
    // ]
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {},
      }
}