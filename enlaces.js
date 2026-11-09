// =====================================================================
//  ENLACES DEL PROYECTO  —  ESTE ES EL ÚNICO ARCHIVO QUE EDITAS
// =====================================================================
//  Cada vez que renueves la Shared View de Revit (cada 30 días), pega
//  aquí el enlace nuevo en "revit" y cambia la fecha "revit_actualizado".
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
  vigencia_dias: 0,

  // Modelo 3D de REVIT (Shared View de Autodesk, desde IDILIO-ARQ.rvt). VENCE a los 30 días:
  // al renovarla (Revit > Colaborar > Compartir > Vistas compartidas) pega aquí el enlace
  // nuevo y cambia revit_actualizado. Vacío ("") = el botón aparece como "No disponible".
  revit:            "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDE4NDc5N185M2JlZmE1Zi0xZTcyLTQ0MTEtODFmMi0yNTViMmNjN2MxOWEuY29sbGFib3JhdGlvbg",
  revit_actualizado: "2026-11-08",
  revit_vigencia_dias: 30,

  // Revit PISO POR PISO: una Shared View por nivel (vistas "01 ..." a "17 ..." de IDILIO-ARQ.rvt).
  // También vencen a los 30 días. Para NO cambiar los enlaces: en Revit > Vistas compartidas >
  // "..." de cada una > Extend, y luego actualiza aquí revit_pisos_actualizado.
  revit_pisos_actualizado: "2026-11-09",
  revit_pisos: [
    ["Sótano 02",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMjEyOV80YjMxMTUzZC1iZDliLTRhOGQtOWM0Yi05Mjg3ZDU1YjQ5ZTIuY29sbGFib3JhdGlvbg"],
    ["Sótano 01",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMjIwN185MjA5YWMyOC01ZGViLTRiMDAtOGNhYy1jNjM1N2MzN2YyYzkuY29sbGFib3JhdGlvbg"],
    ["Semisótano",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMjI3Nl9lZTRmZmQzMS0yZjBhLTRlNTgtOGI4Mi0zOWRiNjY4YTBjNmUuY29sbGFib3JhdGlvbg"],
    ["1er nivel",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMjM0Ml84ZDhkNWFhMi01YWM5LTQ1NmUtYTVkMi0wYTg0OWIxMzAyYjMuY29sbGFib3JhdGlvbg"],
    ["2do nivel",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMjQxNV9lYTgwNGU0Yy1kOTc3LTRlZGQtYWFjZC1jNzJkOTQ3MzRjMTIuY29sbGFib3JhdGlvbg"],
    ["3er nivel",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMTI1Ml85MTNlMjIxOC05YmNlLTRmZjMtOGRiMi0wNjgxMjgyMzgzZmMuY29sbGFib3JhdGlvbg"],
    ["4to nivel",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMjQ4NV9hMWZkMDk3OC01NjM5LTQwNTQtODNkNi0yNjlhY2U2N2U4OWEuY29sbGFib3JhdGlvbg"],
    ["5to nivel",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMjU1OF8xNTQwYWYwYi02MmY1LTQ0OTEtYmFkZS1jNTZiODBjMjg1NjkuY29sbGFib3JhdGlvbg"],
    ["6to nivel",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMjYyOF9jNTExNzJmOS1hMjUwLTRhN2MtYWMxMC01MzViMjNkMWRkNGIuY29sbGFib3JhdGlvbg"],
    ["7mo nivel",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMjY5OV8zZjhjOTlhZS04MzczLTRlYjgtOTdlYy03ZTA2MGY1MTVlYzcuY29sbGFib3JhdGlvbg"],
    ["8vo nivel",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMjc2Nl82YTI5OTAyNi05MjU4LTQxNzItODU4ZS04N2I0ZTc4NDkwYzguY29sbGFib3JhdGlvbg"],
    ["9no nivel",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMjgzN18zMmNmMjY5Ni01YzA0LTRmZjgtODAwOS1iZGEzZTlhYWFiMTkuY29sbGFib3JhdGlvbg"],
    ["10mo nivel",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMjkwN19mYjlmZTE2Ny1mMTIyLTQ4YmQtOTVjMS02MmVkOTU3NjQ0ZjYuY29sbGFib3JhdGlvbg"],
    ["11vo nivel",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMjk3OV8yYzU0MTJlNi04YTA4LTRkYTUtYWFhOC00NTJmYjY0NzgzMWYuY29sbGFib3JhdGlvbg"],
    ["12vo nivel",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMzA0OV8xOTkzOGQ3My1hZjQ5LTQ5ZGUtOTQ1YS01NGViYjU2YzQ1ZGEuY29sbGFib3JhdGlvbg"],
    ["Azotea",     "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMzEyMF80NTM1MWU5YS00YjFjLTQ3NWUtODkyYy04MzhjMTJkNDMzZjYuY29sbGFib3JhdGlvbg"],
    ["Techos",     "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDIwMzE5MV9lMWI1MGYzNy1mNmQxLTQ0ZWItYmEzZi05OTMzMmRmOWNkZmYuY29sbGFib3JhdGlvbg"]
  ]
};
