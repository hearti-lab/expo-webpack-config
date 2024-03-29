"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const expo_pwa_1 = require("expo-pwa");
const ModifyJsonWebpackPlugin_1 = __importDefault(require("./ModifyJsonWebpackPlugin"));
function logNotice(type, message) {
    console.log(chalk_1.default.magenta(`\u203A ${type}: ${chalk_1.default.gray(message)}`));
}
function logWarning(type, message) {
    console.log(chalk_1.default.yellow(`\u203A ${type}: ${chalk_1.default.gray(message)}`));
}
class ChromeIconsWebpackPlugin extends ModifyJsonWebpackPlugin_1.default {
    // Maybe we should support the ability to create all icons individually
    constructor(options, icon) {
        // TODO(Bacon): Validation
        super();
        this.options = options;
        this.icon = icon;
    }
    async modifyAsync(compiler, compilation, data) {
        // If the icons array is already defined, then skip icon generation.
        if (Array.isArray(data.json.icons)) {
            logNotice('Chrome Icons', `Using custom \`icons\` from PWA manifest`);
            return data;
        }
        if (!this.icon) {
            logWarning('Chrome Icons', `No template image found, skipping auto generation...`);
            return data;
        }
        data.json.icons = [];
        const iconAssets = await (0, expo_pwa_1.generateChromeIconAsync)(this.options, this.icon, {});
        for (const asset of iconAssets) {
            compilation.assets[asset.asset.path] = {
                source: () => asset.asset.source,
                size: () => asset.asset.source.length,
            };
            data.json.icons.push(asset.manifest);
        }
        return data;
    }
}
exports.default = ChromeIconsWebpackPlugin;
//# sourceMappingURL=ChromeIconsWebpackPlugin.js.map