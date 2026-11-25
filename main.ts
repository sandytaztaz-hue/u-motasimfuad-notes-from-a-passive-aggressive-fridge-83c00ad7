// Notes From a Passive-Aggressive Fridge — make.fun entry program.
// Writes exactly one line to /output/entry.txt.
// The note: the fridge catches its owner staring into it for nine minutes
// with the door open, choosing nothing — and bills the owner for its time.
// One concrete scene (nine minutes, door open), the fridge's own voice
// (smug about its door alarm, petty about the owner's habits), punchline
// last. It dodges the field's tired angles: no expired yogurt, no
// leftovers union, no "per my last email" corporate memo, no ice-maker
// strike. Field sampled 2026-11-25: 1,967 entries, yogurt/leftovers/
// door-open nagging dominate, so this line takes the time-billing angle.
// Gate: 1 to 200 characters, single line. Verified: 124 chars.
import { mkdirSync, writeFileSync } from "node:fs";

// One concrete scene + a real number + punchline last. The fridge is the
// wronged party: it kept everything cold while the owner wasted its time,
// so it answers with paperwork — a logged meeting and a bill.
const LINE =
  "You stared into me for nine minutes, door open, and chose nothing. I have logged it as a meeting and billed you for my time.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error("entry out of gate: " + chars + " chars, need 1-200");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
