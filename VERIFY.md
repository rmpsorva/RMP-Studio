# Verificar AURION CORE

El ZIP `AURION-CORE.zip` no es “un archivo de Releases”.
Está atado a un commit, un workflow y una cuenta GitHub mediante
**artifact attestations** (Sigstore).

## 1. Bajar el nucleo

https://github.com/rmpsorva/RMP-Studio/releases/tag/aurion-latest

## 2. Comprobar la firma

```bash
gh attestation verify AURION-CORE.zip --repo rmpsorva/RMP-Studio
```

Si el archivo fue tocado, el comando falla.

## 3. Comprobar el hash

```bash
sha256sum -c SHA256SUMS
```

## 4. Qué demuestra

- Quién construyó: `rmpsorva/RMP-Studio`
- Dónde: GitHub-hosted runner
- Desde qué commit
- Que el bytes del ZIP coinciden con la atestación pública

En repos públicos la atestación también queda en el log transparente de Sigstore.
