import path from "node:path";
import { readFile } from "node:fs/promises";
import {IconSchema, type IconRecord} from "@/schemas/icon";

const ICON_FILE = path.join(process.cwd(), "public", "icons.json");

export async function getIcons(): Promise<IconRecord> {
  const raw = await readFile(ICON_FILE, "utf8");
  const parsed = IconSchema.safeParse(JSON.parse(raw));
  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((i) => `* ${i.path.join(".") || "(root)"}: ${i.message}`)
      .join("\n");
      throw new Error("posts.jon validation failed \n" + issues);
  }
  return parsed.data;
}

export async function getSkills() {
  const icons = await getIcons();
  return icons.map(p => p.skills);
}

export async function getDeveloperTools() {
  const icons = await getIcons();
  return icons.map(p => p.developertools);
}


