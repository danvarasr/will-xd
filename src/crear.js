import fs from "fs";
import path from "path";

// fuerza la ruta a la raíz del proyecto
const base = path.resolve(process.cwd(), "public", "audio");

fs.mkdirSync(base, { recursive: true });

for (let i = 1; i <= 93; i++) {
  fs.mkdirSync(path.join(base, `q${i}`), { recursive: true });
}

console.log("Listo ✅", base);
