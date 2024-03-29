"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paths_1 = require("@expo/config/paths");
const env_1 = require("./env");
const webpack_config_1 = __importDefault(require("./webpack.config"));
/**
 * Create the official Webpack config for loading Expo web apps.
 *
 * @param env Environment props used to configure features.
 * @param argv
 * @category default
 */
async function createWebpackConfigAsync(env = {}, argv = {}) {
    if (!env.projectRoot) {
        env.projectRoot = (0, paths_1.getPossibleProjectRoot)();
    }
    if (!env.platform) {
        // @ts-ignore
        env.platform = process.env.EXPO_WEBPACK_PLATFORM;
    }
    const environment = (0, env_1.validateEnvironment)(env);
    const config = await (0, webpack_config_1.default)(environment, argv);
    // @ts-ignore: deprecated
    if (environment.info) {
        console.warn('environment.info is deprecated');
    }
    if ('offline' in environment) {
        throw new Error('The `offline` flag is deprecated. Please setup a service worker for your web project manually.');
    }
    return config;
}
exports.default = createWebpackConfigAsync;
//# sourceMappingURL=index.js.map