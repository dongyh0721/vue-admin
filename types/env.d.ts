/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_EL_ICON_PREFIX: string;
  readonly VITE_APP_LOCAL_ICON_PREFIX: string;
  readonly VITE_PORT: number;
  readonly VITE_APP_API_URL: string;
}
interface ImportMeta {
  readonly end: ImportMetaEnv;
}
