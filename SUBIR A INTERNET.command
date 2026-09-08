#!/bin/bash
# Doble clic para publicar los cambios en jjtellez.lat
cd "$(dirname "$0")" || exit 1
clear
echo ""
echo "  Publicando los cambios de tu web…"
echo ""
RAMA=$(git rev-parse --abbrev-ref HEAD)
git push origin "$RAMA"
if [ $? -eq 0 ]; then
  echo ""
  echo "  Listo. Vercel esta construyendo jjtellez.lat."
  echo "  En uno o dos minutos la foto ya se ve en la pagina."
  sleep 2
  open "https://jjtellez.lat"
else
  echo ""
  echo "  No se pudo subir. Copia lo que dice arriba y pasamelo."
fi
echo ""
echo "  Puedes cerrar esta ventana."
