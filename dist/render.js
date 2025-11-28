import ejs from "ejs";
export const render = (tpl, data) => ejs.render(tpl, data, { async: false, rmWhitespace: false });
//# sourceMappingURL=render.js.map