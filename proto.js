if (!window.AURION_HERO) {
  const img = document.getElementById("heroImg");
  if (img) img.remove();
}
async function aurionHash(blob){
  const buf = await crypto.subtle.digest("SHA-256", await blob.arrayBuffer());
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}
async function aurionSeal(){
  if (!file) { setStatus("Elige un archivo primero.", "warn"); return; }
  setStatus("Calculando SHA-256 en este aparato…");
  try {
    const hex = await aurionHash(file);
    const rec = {
      spec: "aurion-provenance/v0",
      product: "AURION",
      kind: "human",
      name: file.name,
      sha256: hex,
      bytes: file.size,
      type: file.type || "",
      created_at: new Date().toISOString(),
      tool: "rmpsorva/RMP-Studio",
      device: "local-browser",
      seal: "https://github.com/rmpsorva/RMP-Studio/actions/workflows/seal.yml"
    };
    dl(new Blob([JSON.stringify(rec, null, 2)], { type: "application/json" }), file.name.replace(/\.[^.]+$/, "") + "-AURION.json");
    try { await navigator.clipboard.writeText(hex); } catch (e) {}
    setStatus("Hash " + hex + "\nSidecar descargado. El archivo NO se subió.\nActions → AURION SEAL → pega el hash para firmarlo.", "ok");
  } catch (e) {
    setStatus("No se pudo sellar: " + (e.message || e), "warn");
  }
}
const sealBtn = document.getElementById("sealBtn");
if (sealBtn) sealBtn.onclick = aurionSeal;
