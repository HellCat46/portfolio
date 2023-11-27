export const TAGS = {
  Typescript: { name: "TS/JS", color: "#007acc" },
  Nodejs: { name: "Node", color: "#3c873a" },
  Rust: { name: "Rust", color: "#e43716" },
  C: { name: "C/C++", color: "#03589b" },
} as const;
export type Tags = (typeof TAGS)[keyof typeof TAGS];

export const STATUS = {
  Complete: { name: "Completed", color: "#a6e3a1" },
  Working: { name: "Working On", color: "#f9e2af" },
  Archive: { name: "Archived", color: "#f38ba8" },
} as const;
export type Status = (typeof STATUS)[keyof typeof STATUS];
