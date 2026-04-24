import { defineCollection, z } from 'astro:content';

// ─── Site settings ───
const settings = defineCollection({
  type: 'content',
  schema: z.object({
    site_title: z.string().optional(),
    meta_description: z.string().optional(),
    meta_keywords: z.string().optional(),
    og_title: z.string().optional(),
    og_description: z.string().optional(),
    og_image: z.string().optional(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    properties_dropdown: z.array(z.object({
      label: z.string(), href: z.string(), location: z.string().optional()
    })).optional(),
    cta_label: z.string().optional(),
    cta_href: z.string().optional(),
    brand_description: z.string().optional(),
    tagline: z.string().optional(),
    destinations_links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    collection_links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    contact_links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    endorser_text: z.string().optional(),
    copyright_year: z.string().optional()
  })
});

// ─── Hero ───
const hero = defineCollection({
  type: 'content',
  schema: z.object({
    volume_label: z.string(),
    title_line_1: z.string(),
    title_line_2: z.string(),
    body_1: z.string(),
    body_2: z.string(),
    bottom_left: z.string(),
    scroll_label: z.string(),
    background_image: z.string(),
    background_alt: z.string().optional()
  })
});

// ─── Letter ───
const letter = defineCollection({
  type: 'content',
  schema: z.object({
    chapter_number: z.string(),
    chapter_label: z.string(),
    dateline: z.string(),
    headline: z.string(),
    lead: z.string(),
    body_paragraphs: z.array(z.object({ text: z.string() })),
    signature_name: z.string(),
    signature_role: z.string()
  })
});

// ─── Pillars intro ───
const pillarsintro = defineCollection({
  type: 'content',
  schema: z.object({
    headline: z.string(),
    supporting: z.string()
  })
});

// ─── Pillars (3 items) ───
const pillars = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    numeral: z.string(),
    phrase_line_1: z.string(),
    phrase_line_2: z.string(),
    description: z.string()
  })
});

// ─── Places intro ───
const placesintro = defineCollection({
  type: 'content',
  schema: z.object({
    eyebrow: z.string(),
    headline: z.string(),
    supporting: z.string()
  })
});

// ─── Properties (Mara, Malaika, future) ───
const properties = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    name: z.string(),
    short_name: z.string(),
    location: z.string(),
    tagline: z.string(),
    description: z.string(),
    image: z.string(),
    image_alt: z.string().optional(),
    tag_label: z.string(),
    specs: z.array(z.object({ label: z.string(), value: z.string() })),
    cta_label: z.string(),
    cta_href: z.string(),
    show_in_nav: z.boolean().default(true)
  })
});

// ─── Beyond / experiences intro ───
const beyond = defineCollection({
  type: 'content',
  schema: z.object({
    headline: z.string(),
    aside: z.string()
  })
});

// ─── Experiences (6 cards) ───
const experiences = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    number: z.string(),
    title: z.string(),
    description: z.string()
  })
});

// ─── Notes intro ───
const notesintro = defineCollection({
  type: 'content',
  schema: z.object({
    eyebrow: z.string(),
    headline: z.string(),
    supporting: z.string()
  })
});

// ─── Field notes postcards ───
const fieldnotes = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    image: z.string(),
    image_alt: z.string().optional(),
    caption: z.string(),
    meta: z.string().optional()
  })
});

// ─── Group / Planhotel family ───
const group = defineCollection({
  type: 'content',
  schema: z.object({
    label: z.string(),
    headline: z.string(),
    body: z.string(),
    values: z.array(z.object({ value: z.string() }))
  })
});

// ─── Sister brands ───
const sisterbrands = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    name: z.string(),
    mark: z.string(),
    description: z.string(),
    href: z.string()
  })
});

// ─── Journal / Newsletter ───
const journal = defineCollection({
  type: 'content',
  schema: z.object({
    eyebrow: z.string(),
    headline: z.string(),
    supporting: z.string(),
    input_placeholder: z.string(),
    button_label: z.string(),
    success_message: z.string()
  })
});

export const collections = {
  settings,
  hero,
  letter,
  pillarsintro,
  pillars,
  placesintro,
  properties,
  beyond,
  experiences,
  notesintro,
  fieldnotes,
  group,
  sisterbrands,
  journal
};
