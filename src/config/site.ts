/**
 * Single source of truth for identity, contact details and site metadata.
 *
 * Everything a human needs to personalise before launch lives in this file.
 * Values marked CHANGE-ME are placeholders - nothing here was invented from
 * the profile, so fill them in before deploying.
 */

export const site = {
  /** Full name as it appears publicly. */
  name: 'Justin Zacharias',

  /** Professional positioning - used in the hero and the <title>. */
  role: 'Business Intelligence & Data Engineering Consultant',

  /**
   * CHANGE-ME: the contact address shown on the site. This is currently the
   * ONLY contact route on the page (LinkedIn is disabled below), and the value
   * is rendered verbatim on the contact button - so an unset placeholder is
   * visible to every visitor. Set a real address before publishing.
   */
  email: 'CHANGE-ME@example.com',

  /**
   * LinkedIn profile URL, or null to hide the link everywhere (contact
   * section and JSON-LD). Set it to a full https:// URL to switch it on.
   */
  linkedin: null as string | null,

  /** CHANGE-ME: where you are based, e.g. 'Germany'. Shown in the footer. */
  location: 'Germany',

  /** Meta description (~155 chars) used for search results and link previews. */
  description:
    'Business Intelligence and Data Engineering consultant. I help companies build, modernise and migrate data platforms - ETL/ELT pipelines, AWS and Snowflake cloud platforms, Data Vault 2.0 warehousing and BI reporting.',

  /**
   * Plausible Analytics - privacy-friendly, cookieless, no personal data.
   * CHANGE-ME: set to the domain registered in Plausible (e.g. 'example.com').
   * Leave as null to ship without any analytics script at all.
   */
  plausibleDomain: null as string | null,
} as const;

/** Section anchors, kept in one place so nav links and sections cannot drift. */
export const sections = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Experience' },
  { id: 'approach', label: 'Approach' },
] as const;
