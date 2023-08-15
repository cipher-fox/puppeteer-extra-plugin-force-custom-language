import { PuppeteerExtraPlugin, PluginRequirements } from 'puppeteer-extra-plugin'
import { Page, Target } from 'puppeteer'

export = defaultExport;

declare function defaultExport(opts?: {
    language?: string,
    ip?: boolean,
    httpHeaders?: boolean,
    geoLocation?: boolean,
    javascript?: boolean,
    requestInterceptionPriority?: number
}): ForceCustomLanguagePlugin;

declare const ForceCustomLanguagePlugin_base: PuppeteerExtraPlugin;

declare class ForceCustomLanguagePlugin extends ForceCustomLanguagePlugin_base {
    constructor(opts?: {});

    get defaults(): {
        language: string,
        ip: boolean,
        httpHeaders: boolean,
        geoLocation: boolean,
        javascript: boolean,
        requestInterceptionPriority: number
    };

    get name(): string;

    get requirements(): PluginRequirements;

    async beforeLaunch(options: any): Promise<void>;

    async onPageCreated(page: Page): Promise<void>;

    async onTargetChanged(target: Target): Promise<void>;
}