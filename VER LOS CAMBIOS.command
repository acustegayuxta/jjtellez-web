#!/bin/bash
# Doble clic para ver tu web con los cambios, en tu Mac.
cd "$(dirname "$0")" || exit 1
clear
echo ""
echo "  Levantando jjtellez.lat en tu computador."
echo "  Se abre sola en el navegador. Deja esta ventana abierta."
echo "  Para apagarla: cierra la ventana."
echo ""
( sleep 6; open -a "Google Chrome" "http://localhost:3000" ) &
npm run dev
