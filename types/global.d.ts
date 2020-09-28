declare module '*.module.scss';

declare type AppConfig = {
  botUrl: string;
}

declare interface Window {
  appConfig: AppConfig;
}
