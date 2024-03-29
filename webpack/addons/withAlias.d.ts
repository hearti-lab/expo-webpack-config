import { AnyConfiguration } from '../types';
/**
 * Apply aliases to a Webpack config
 *
 * @param webpackConfig Existing Webpack config to modify.
 * @param alias Extra aliases to inject
 * @category addons
 */
export default function withAlias(webpackConfig: AnyConfiguration, alias?: {
    [key: string]: string;
}): AnyConfiguration;
