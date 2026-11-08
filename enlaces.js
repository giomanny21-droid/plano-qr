// =====================================================================
//  ENLACES DEL PROYECTO  —  ESTE ES EL ÚNICO ARCHIVO QUE EDITAS
// =====================================================================
//  Cada vez que renueves la Shared View de Revit (cada 30 días), pega
//  aquí el enlace nuevo en "modelo3d" y cambia la fecha "actualizado".
//  Guarda (Commit changes) y en ~1 minuto la página ya muestra el nuevo
//  enlace. El QR impreso NO cambia nunca.
//
//  Si dejas un enlace vacío ("") su botón aparece como "No disponible".
// =====================================================================

window.ENLACES = {
  proyecto:   "Edificio Residencial Idilio Vistania",
  subtitulo:  "Planos de Arquitectura · Cayma, Arequipa",

  // PDF del juego de planos (puede ser un archivo de esta misma carpeta,
  // p. ej. "archivos/planos.pdf", o un enlace compartido de OneDrive/Drive)
  pdf:        "https://drive.google.com/file/d/17QrsbEO2_ugSphFw9662ZCKJ-Lzt5-wm/view?usp=sharing",

  // DWG (mismo criterio que el PDF)
  // (enlace de DESCARGA directa: un DWG no se puede previsualizar en el celular)
  dwg:        "https://drive.google.com/uc?export=download&id=1zkI-iY79D-pgyAcec2F7kWv0Mt4U2HYp",

  // Enlace de la Shared View de Revit (Autodesk Viewer). VENCE A LOS 30 DÍAS.
  modelo3d:   "",

  // Fecha en que pegaste el último enlace del modelo 3D (AAAA-MM-DD)
  actualizado: "2026-11-07",

  // Días que dura la Shared View (para avisar cuándo vence)
  vigencia_dias: 30
};
