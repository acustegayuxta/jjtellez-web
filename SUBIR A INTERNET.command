#!/bin/bash
# Doble clic para publicar los cambios en jjtellez.lat.
#
# Sube los cambios y despues espera a que Vercel termine de construir de verdad,
# preguntandole al sitio que version tiene viva. Antes solo subia y decia
# "listo", aunque el build se hubiera roto.
cd "$(dirname "$0")" || exit 1
clear

SITIO="https://jjtellez.lat"
RAMA=$(git rev-parse --abbrev-ref HEAD)
MIO=$(git rev-parse HEAD)

echo ""
echo "  Publicando los cambios de tu web…"
echo ""

if ! git push origin "$RAMA"; then
  echo ""
  echo "  No se pudo subir. Copia lo que dice arriba y pasamelo."
  echo ""
  echo "  Puedes cerrar esta ventana."
  exit 1
fi

echo ""
echo "  Subido. Ahora espero a que Vercel lo construya."
echo "  Suele tardar entre uno y tres minutos."
echo ""

# Se pregunta cada diez segundos, hasta cinco minutos.
INTENTOS=30
LISTO=0
for ((i = 1; i <= INTENTOS; i++)); do
  VIVO=$(curl -s --max-time 10 "$SITIO/api/version" | sed -n 's/.*"commit":"\([^"]*\)".*/\1/p')
  if [ "$VIVO" = "$MIO" ]; then
    LISTO=1
    break
  fi
  printf "\r  Esperando… %d de %d" "$i" "$INTENTOS"
  sleep 10
done

echo ""
echo ""

if [ "$LISTO" -eq 1 ]; then
  echo "  Listo de verdad. Tus cambios ya se ven en jjtellez.lat."
  sleep 2
  open "$SITIO"
else
  echo "  Vercel no termino, o el build se rompio."
  echo ""
  echo "  Te abro el panel de Vercel: mira el despliegue de mas arriba."
  echo "  Si sale en rojo, entra y copiame el error."
  echo ""
  echo "  Mientras tanto jjtellez.lat sigue mostrando la version anterior,"
  echo "  asi que no se rompio nada."
  sleep 3
  open "https://vercel.com/dashboard"
fi

echo ""
echo "  Puedes cerrar esta ventana."
