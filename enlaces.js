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
  // (drive.usercontent.google.com descarga directo y no lo intercepta la app de Drive del celular)
  dwg:        "https://drive.usercontent.google.com/download?id=1zkI-iY79D-pgyAcec2F7kWv0Mt4U2HYp&export=download&confirm=t",

  // Modelo 3D. Ahora: visor propio de esta página ("modelo3d/"), que NO vence.
  // Si luego usas la Shared View de Revit, pega aquí su enlace (vence a los 30 días)
  // y cambia vigencia_dias a 30.
  modelo3d:   "modelo3d/",

  // Fecha en que pegaste el último enlace del modelo 3D (AAAA-MM-DD)
  actualizado: "2026-11-08",

  // Días que dura el enlace 3D (0 = no vence; 30 para una Shared View de Revit)
  vigencia_dias: 0
};
