import type { SanityImageSource } from "@sanity/image-url";

/**
 * Mirrors the Sanity `teamMember` document schema (`src/sanity/schemaTypes/teamMemberType.ts`).
 *
 * `group` matches the radio choices in the schema and maps 1:1 to the
 * team-page sections:
 *   - "organizer" → CoFounders
 *   - "leads"     → Leads
 *   - "core"      → CoreTeam
 *   - "volunteer" → Volunteers
 */
export type TeamMemberGroup = "organizer" | "leads" | "core" | "volunteer";

export interface TeamMember {
  _id: string;
  name: string;
  designation: string;
  group: TeamMemberGroup;
  description?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  /** Resolved by the GROQ projection — passes straight into `urlFor()`. */
  image?: SanityImageSource;
  /** `slug.current` resolved into a flat field. */
  slug?: string;
  orderRank?: number;
  isActive?: boolean;
}

export interface TeamMembersBySection {
  organizers: TeamMember[];
  leads: TeamMember[];
  core: TeamMember[];
  volunteers: TeamMember[];
}