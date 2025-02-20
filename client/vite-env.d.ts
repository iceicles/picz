/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_URL_TLD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}