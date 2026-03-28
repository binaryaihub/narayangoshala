import fs from "fs";
import path from "path";
import yaml from "js-yaml";

let _content: Record<string, unknown> | null = null;

export function getContent(): Record<string, unknown> {
  if (_content) return _content;
  const filePath = path.join(process.cwd(), "content.yaml");
  const raw = fs.readFileSync(filePath, "utf8");
  _content = yaml.load(raw) as Record<string, unknown>;
  return _content;
}

// Helper to safely access nested values
export function get<T = unknown>(key: string): T {
  const content = getContent();
  const keys = key.split(".");
  let result: unknown = content;
  for (const k of keys) {
    if (result && typeof result === "object" && k in (result as Record<string, unknown>)) {
      result = (result as Record<string, unknown>)[k];
    } else {
      return undefined as T;
    }
  }
  return result as T;
}
