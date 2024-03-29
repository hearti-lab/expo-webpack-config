import { IconOptions, ProjectOptions } from 'expo-pwa';
import { compilation as compilationNS, Compiler } from 'webpack';
import { BeforeEmitOptions } from './JsonWebpackPlugin';
import ModifyJsonWebpackPlugin from './ModifyJsonWebpackPlugin';
export declare type Options = {
    source: string;
    outputPath?: string;
    backgroundColor?: string;
    resizeMode?: 'contain' | 'cover';
};
export default class ChromeIconsWebpackPlugin extends ModifyJsonWebpackPlugin {
    private options;
    private icon;
    constructor(options: ProjectOptions, icon: IconOptions | null);
    modifyAsync(compiler: Compiler, compilation: compilationNS.Compilation, data: BeforeEmitOptions): Promise<BeforeEmitOptions>;
}
