import type { Experience } from "@/types/experiences";

export const EXPERIENCES = [
  {
    category: "Software Development",
    experienceDescription: [
      "Architected high-throughput backend notification microservices handling single-user and batch delivery with persistent logging, transactional integrity, and automated retry mechanisms.",
      "Engineered a semantic vector search pipeline using cosine similarity embeddings, optimizing query response latency for in-app contextual retrieval across structured data.",
      "Built reusable cross-platform components in Flutter and refactored state management to reduce client-side render lag.",
    ],
    experienceLinks: {},
    experienceOrg: {
      link: "",
      name: "Byteoski Developers",
      websiteDisplayName: "",
    },
    experienceStatus: {
      endAt: "Jul, 2026",
      startAt: "Jun, 2026",
    },
    experienceTech: [
      "FastAPI",
      "Python",
      "Microservices",
      "Vector Search",
      "Flutter",
      "RESTful APIs",
    ],
    experienceTitle: "Software Developer Intern",
    orgDescription:
      "Byteoski Developers builds modern web and mobile software solutions, high-throughput microservices, and AI-assisted data pipelines.",
    slug: "byteoski",
  },
  {
    category: "EdTech & Analytics",
    experienceDescription: [
      "Engineered a multi-tenant backend architecture across 9 domain modules supporting 4-tier Role-Based Access Control: Super Admin, Institute Admin, Teacher, and Student.",
      "Implemented token-based authentication using JWT, sliding session expiration, and token-bucket rate limiting to protect public endpoints against DDoS and brute-force spikes.",
      "Designed normalized database schemas and aggregation queries in PostgreSQL/MongoDB to power low-latency institute analytics dashboards tracking student performance metrics.",
    ],
    experienceLinks: {},
    experienceOrg: {
      link: "",
      name: "Streaksha",
      websiteDisplayName: "",
    },
    experienceStatus: {
      endAt: "May, 2026",
      startAt: "Feb, 2026",
    },
    experienceTech: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "JWT",
      "RBAC",
      "Rate Limiting",
      "REST APIs",
    ],
    experienceTitle: "Software Developer Intern",
    orgDescription:
      "Streaksha is an educational technology platform offering multi-tenant institute management, RBAC access control, and low-latency performance analytics.",
    slug: "streaksha",
  },
] as const satisfies readonly Experience[];

