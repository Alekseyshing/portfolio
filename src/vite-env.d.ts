/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_MAIL_CHIMP_URL: string;
  readonly VITE_APP_MAIL_CHIMP_U: string;
  readonly VITE_APP_MAIL_CHIMP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}