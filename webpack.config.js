const path = require('path');

module.exports = {
    entry: './public/src/js/matchpairs.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist/js')
    }
};