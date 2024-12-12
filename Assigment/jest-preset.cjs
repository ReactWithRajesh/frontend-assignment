module.exports = {
    preset: 'vite-plugin-react',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
};
