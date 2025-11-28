import path from "node:path";
import fs from "node:fs/promises";
import { render } from "./render.js";
export async function ensureDir(p) { await fs.mkdir(p, { recursive: true }); }
export async function copyDir(src, dst) {
    await ensureDir(dst);
    for (const entry of await fs.readdir(src, { withFileTypes: true })) {
        const s = path.join(src, entry.name);
        const d = path.join(dst, entry.name);
        if (entry.isDirectory())
            await copyDir(s, d);
        else
            await fs.copyFile(s, d);
    }
}
export async function renderAndCopyDir(src, dst, data) {
    await ensureDir(dst);
    for (const entry of await fs.readdir(src, { withFileTypes: true })) {
        const s = path.join(src, entry.name);
        const d = path.join(dst, entry.name.replace(/\.ejs$/, ""));
        if (entry.isDirectory())
            await renderAndCopyDir(s, d, data);
        else {
            const content = await fs.readFile(s, "utf8");
            const out = s.endsWith(".ejs") ? render(content, data) : content;
            await fs.writeFile(d, out, "utf8");
        }
    }
}
export async function writeJSON(p, obj) {
    await fs.writeFile(p, JSON.stringify(obj, null, 2) + "\n", "utf8");
}
//# sourceMappingURL=files.js.map