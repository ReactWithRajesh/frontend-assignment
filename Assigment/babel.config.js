module.exports = {
    presets: [
        '@babel/preset-env',  // Transpile modern JavaScript
        '@babel/preset-react', // Transpile JSX
    ],
    plugins: ['@babel/plugin-transform-runtime'],
};
