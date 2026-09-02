# AURION CORE
by R.M.P — Real Mente Poder

Convierte video, audio, imagen y archivos en el navegador.
ZIP, GZIP, PDF, recorte, extraer audio, frame, lote.
Vault MENTAL STATE local (IndexedDB).

## Lo que este repo hace que casi nadie enciende

Cada push a `main`:
1. Valida el núcleo
2. Empaca `AURION-CORE.zip`
3. Firma procedencia SLSA con Sigstore (`actions/attest-build-provenance`)
4. Publica Pages
5. Actualiza el release vivo [`aurion-latest`](https://github.com/rmpsorva/RMP-Studio/releases/tag/aurion-latest)

Verificar:

```bash
gh attestation verify AURION-CORE.zip --repo rmpsorva/RMP-Studio
```

Fábrica pública: https://rmpsorva.github.io/RMP-Studio/factory.html
App: https://rmpsorva.github.io/RMP-Studio/

## iPhone
1. Settings → Pages → Source: GitHub Actions
2. Abre la app
3. Compartir → Añadir a pantalla de inicio
