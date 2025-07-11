export const TAGS = {
  // Languages
  Typescript: { name: "TS/JS", color: "#007acc" },
  Nodejs: { name: "Node", color: "#3c873a" },
  Rust: { name: "Rust", color: "#e43716" },
  C: { name: "C", color: "#03589b" },
  CPP: { name: "C++", color: "#00599c" },
  CSharp: { name: "C#", color: "#9d72d9" },
  Java: { name: "Java", color: "#f8981d" },
  Golang : { name: "Go", color: "#00a9e0" },
  
  // Libraries & Frameworks
  Wayland: { name: "Wayland", color: "#ffbd00" },
  Hyprland: { name: "Hyprland", color: "#00d4da" },
  OpenSSL: { name: "OpenSSL", color: "#f0f0f0" },
  Socket : { name : "Unix Socket", color: "#b4befe"},
  Base64: { name: "Base64", color: "#f0f0f0" },
  
  // Databases
  MySQL: { name: "MySQL", color: "#e48e00" },
  MsSQL: { name: "MsSQL", color: "#df2f29" },
  Postgres: { name: "PostgreSQL", color: "#2f6792" },
  Azure: { name: "Azure", color: "#06529a" },
  Docker: { name: "Docker", color: "#0092e6" },
  GraphQL: { name: "GraphQL", color: "#e535ab" },
} as const;
export type Tags = (typeof TAGS)[keyof typeof TAGS];

export const STATUS = {
  Complete: { name: "Completed", color: "#a6e3a1" },
  Working: { name: "Working On", color: "#f9e2af" },
  Archive: { name: "Archived", color: "#f38ba8" },
} as const;
export type Status = (typeof STATUS)[keyof typeof STATUS];
