const path = require('path');

const baseDir = () => {
    return path.dirname(require.main.filename);
}

module.exports = {
    baseDirectory: baseDir(),
    path: path
};