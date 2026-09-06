const uswds = require("@uswds/compile");

uswds.settings.version = 3;

uswds.paths.dist.theme = "./src/styles/uswds";
uswds.paths.dist.css = "./public/uswds/css";
uswds.paths.dist.js = "./public/uswds/js";
uswds.paths.dist.fonts = "./public/uswds/fonts";
uswds.paths.dist.img = "./public/uswds/img";

exports.init = uswds.init;
exports.copyAssets = uswds.copyAssets;
exports.compile = uswds.compile;
