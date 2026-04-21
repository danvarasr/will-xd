import fs from "fs";
import path from "path";

// 🔁 CAMBIA esto a tu ruta real del escritorio
const origen = "C:/users/heber/OneDrive/Escritorio/audios";

// destino dentro de tu proyecto
const destinoBase = path.join(process.cwd(), "public", "audio");

const archivos = fs.readdirSync(origen);

for (const archivo of archivos) {
  if (!archivo.endsWith(".mp3")) continue;

  // saca q1, q2, q13, etc
  const match = archivo.match(/^q\d+/);
  if (!match) continue;

  const carpeta = match[0]; // ej: q13

  const origenPath = path.join(origen, archivo);
  const destinoPath = path.join(destinoBase, carpeta, archivo);

  // ⚠️ solo mueve si la carpeta existe (tus 93 carpetas)
  if (!fs.existsSync(path.join(destinoBase, carpeta))) {
    console.log(`No existe carpeta ${carpeta}, se omite`);
    continue;
  }

  fs.renameSync(origenPath, destinoPath);
}

console.log("Listo ✅");