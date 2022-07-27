"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRollupOptions(options) {
    const extraGlobals = {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
        '@emotion/react': 'emotionReact',
        '@emotion/styled': 'emotionStyled',
    };
    if (Array.isArray(options.output)) {
        options.output.forEach((o) => {
            o.globals = Object.assign(Object.assign({}, o.globals), extraGlobals);
        });
    }
    else {
        options.output = Object.assign(Object.assign({}, options.output), { globals: Object.assign(Object.assign({}, options.output.globals), extraGlobals) });
    }
    return options;
}
module.exports = getRollupOptions;
//# sourceMappingURL=bundle-rollup.js.map