import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    /** Short, scannable project title. */
    title: z.string(),
    /** Time frame exactly as documented in projekterfahrung.md. */
    period: z.string(),
    /** Client industry — never the client name. */
    industry: z.string(),
    /** My role on the project. */
    role: z.string(),
    /** One-sentence framing shown under the title. */
    summary: z.string(),
    /** What I was responsible for. */
    responsibilities: z.array(z.string()).min(1),
    /** Technologies used, with an optional short purpose note. */
    stack: z
      .array(
        z.object({
          name: z.string(),
          note: z.string().optional(),
        }),
      )
      .min(1),
    /** Display order — most recent first. */
    order: z.number(),
  }),
});

export const collections = { projects };
