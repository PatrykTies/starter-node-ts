const presets = [
    [
        '@babel/preset-typescript',
        {
            isTSX: true,
            allExtensions: true
        }
    ],
    ['@babel/preset-env']
]

const plugins = [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-runtime']
]

module.exports = { presets, plugins }