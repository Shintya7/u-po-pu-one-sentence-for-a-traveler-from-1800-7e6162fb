// One Sentence for a Traveler from 1800 — make.fun entry.
// Writes one sentence (142 characters) explaining the modern internet
// to a time traveler from 1800, to /output/entry.txt.
// Deterministic: the same exact bytes on every run, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const SENTENCE =
  "It joins every library and post office on earth, so a letter you write at your desk is read by a friend across the sea before your ink is dry.";

// Optional first argument overrides the output path (used for local
// verification); the grader runs `node main.ts` with no arguments.
const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, SENTENCE, "utf8");
