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

  // MODELO DEL PROYECTO (Revit del usuario: 2026001-SDS-IV-XX-M3D-ARQ-004.rvt, compartido desde
  // la copia QR-ARQ-004.rvt). Es el que se muestra primero en la página revit/.
  // Vence a los 30 días: renovar con "..." > Extend en Vistas compartidas y cambiar arq_actualizado.
  arq_actualizado: "2026-11-09",
  arq: "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NDg4OV9iN2NiY2EyNy1mZWI4LTRlYTgtODYxYy05ZDc5ODdjODQ0OWIuY29sbGFib3JhdGlvbg",
  arq_pisos: [
    ["Sótano 02",   "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NTEyOF9iNGNlYmQwMS0xMDc0LTRlOGQtODI3Ni0yOTBjNGY4ZmQ5OGEuY29sbGFib3JhdGlvbg"],
    ["Sótano 01",   "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NTIxOF8yOGI3M2IwZS03ZDM5LTRkOTctODQ0Mi0yOWI5ZjI5MjZkMzYuY29sbGFib3JhdGlvbg"],
    ["Semisótano",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NTMwOF80MDJhYWNiYy0wNTI1LTQ5MmYtOWViOC00NzhhZGNkNGRkNDMuY29sbGFib3JhdGlvbg"],
    ["1er nivel",   "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NTM5Ml9jMmRkZThjZi02MjZiLTQxY2EtYWI2OC02MDJmMzYwNmJiNjUuY29sbGFib3JhdGlvbg"],
    ["2do nivel",   "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NTQ3N18xMmVjNTc4OS1lN2M0LTQ5ZDgtYWM1NS1hZjk5NDM3Nzc2MmMuY29sbGFib3JhdGlvbg"],
    ["3er nivel",   "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NTU2NF9kNjlmYjliNy00NzFlLTRjZDAtODQzNC1jYzNjNTVlYzQ1YzguY29sbGFib3JhdGlvbg"],
    ["4to nivel",   "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NTY0OF9mYzAwZTZkOC01NDVlLTQzMWYtODIzNS1hOTM1YTFjMzY0YmEuY29sbGFib3JhdGlvbg"],
    ["5to nivel",   "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NTczM184ZTdkYmJlNC04MzAxLTQ1NDItYjFkMS01ZDIxNTZkZmU2MWYuY29sbGFib3JhdGlvbg"],
    ["6to nivel",   "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NTgyMF8zNDE0OTNiMi1iYjMwLTQ0MjAtYTA5ZS05ZGRjN2ZlNWNkMDMuY29sbGFib3JhdGlvbg"],
    ["7mo nivel",   "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NTkxNl8zZDY5MDAyMi1lZGVlLTRmYzctYjQ5NS1jMDk5MzUwOTk4MjAuY29sbGFib3JhdGlvbg"],
    ["8vo nivel",   "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NjA2MV8zNWYzZjg5My04ZDdlLTQ3OGYtODgyOC0wNjM3OGE1NjVlNzQuY29sbGFib3JhdGlvbg"],
    ["9no nivel",   "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NjE3MV9kYjVmNDc3OC01NjUxLTQzOWItYWMyNS0yYmRlYjg2MzAxZjguY29sbGFib3JhdGlvbg"],
    ["10mo nivel",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NjI1NV81MjUzNjZjYS1kYjc3LTRmYWYtYmIwNy01OWYzZDFlYTgxYjAuY29sbGFib3JhdGlvbg"],
    ["11vo nivel",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NjQ2N18xMjNlYjY2ZS0yMjM3LTQyN2YtYjNlYi03YTk4NDMyNjY5YmIuY29sbGFib3JhdGlvbg"],
    ["12vo nivel",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NjU1NF9hMzQ2NmMwNS0xZDdhLTRhMTMtOWIwOC0wOTg2NGFhZTg2OWYuY29sbGFib3JhdGlvbg"],
    ["13vo nivel",  "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3NjY3N18xOGI0OTdjNC0yN2JkLTRhNzgtOWNiNy00OTY1ZDI5OGJlZWUuY29sbGFib3JhdGlvbg"],
    ["14vo nivel (techo)", "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTc5NDI3Njk4Nl8zMWZlOGU1ZC04NGZmLTQyZWUtYTc1Yy0yZTEyN2RkZTYwMjMuY29sbGFib3JhdGlvbg"]
  ],

  // ---- Modelo RECONSTRUIDO por Claude desde los DXF (IDILIO-ARQ.rvt): sección aparte en revit/ ----
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
