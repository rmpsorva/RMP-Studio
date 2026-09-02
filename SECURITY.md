# Seguridad — AURION

- La app corre en el navegador. El media no se sube a un servidor de R.M.P.
- Vault MENTAL STATE usa IndexedDB local. Borrar datos del sitio lo borra.
- FFmpeg.wasm se carga desde unpkg. Trata esa dependencia como superficie de riesgo.
- Releases van firmados con GitHub Artifact Attestations.
- No abras issues con secretos, tokens ni claves.

Reportes: abre un issue en este repositorio o contacta al owner `rmpsorva`.
