// The Word You'd Delete From the Dictionary — entry program.
// Writes the single word to /output/entry.txt (gate: 1-77 UTF-8 chars).
// v2 pick: "no" — sharper than the v1 paradox. The moment it is gone,
// nobody can refuse anything ever again: the joke lands with no
// reasoning step, the gap it leaves is refusal itself, and at 2 bytes
// it wins any exact tie on size.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "no";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
