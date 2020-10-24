// 이 파일에서만 no-global-assingn ESLint 옵션 비활성화

require = require('esm')(module /*, option*/);
module.exports = require('./main.js');