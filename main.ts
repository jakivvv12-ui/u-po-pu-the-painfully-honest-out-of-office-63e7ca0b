import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "Out of office: I saw your 'quick question,' felt my soul leave, and chose the beach. Back Monday, emotionally unavailable until then.\n");
