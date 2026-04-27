import { defineCollection, z } from 'astro:content';

// ─── Hero ───
const hero = defineCollection({
  type: 'data',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
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
  type: 'data',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
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

// ─── Pillars Intro ───
const pillarsintro = defineCollection({
  type: 'data',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    headline: z.string(),
    supporting: z.string()
  })
});

// ─── Pillars ───
const pillars = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number(),
    numeral: z.string(),
    phrase_line_1: z.string(),
    phrase_line_2: z.string(),
    description: z.string()
  })
});

// ─── Places Intro ───
const placesintro = defineCollection({
  type: 'data',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    eyebrow: z.string(),
    headline: z.string(),
    supporting: z.string()
  })
});

// ─── Properties ───
const properties = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number(),
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
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

// ─── Beyond ───
const beyond = defineCollection({
  type: 'data',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    headline: z.string(),
    aside: z.string()
  })
});

// ─── Experiences ───
const experiences = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number(),
    number: z.string(),
    title: z.string(),
    description: z.string()
  })
});

// ─── Notes Intro ───
const notesintro = defineCollection({
  type: 'data',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    eyebrow: z.string(),
    headline: z.string(),
    supporting: z.string()
  })
});

// ─── Field Notes ───
const fieldnotes = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number(),
    image: z.string(),
    image_alt: z.string().optional(),
    caption: z.string(),
    meta: z.string().optional()
  })
});

// ─── Group ───
const group = defineCollection({
  type: 'data',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    label: z.string(),
    headline: z.string(),
    body: z.string(),
    values: z.array(z.object({ value: z.string() }))
  })
});

// ─── Sister Brands ───
const sisterbrands = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number(),
    mark: z.string().optional(),
    logo: z.string().optional(),
    logo_alt: z.string().optional(),
    name: z.string(),
    description: z.string(),
    href: z.string()
  })
});

// ─── Journal ───
const journal = defineCollection({
  type: 'data',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    eyebrow: z.string(),
    headline: z.string(),
    supporting: z.string(),
    input_placeholder: z.string(),
    button_label: z.string(),
    success_message: z.string()
  })
});

// ─── Settings ───
const settings = defineCollection({
  type: 'data',
  schema: z.object({
    // nav.json fields
    logo: z.string().optional(),
    logo_alt: z.string().optional(),
    wordmark_main: z.string().optional(),
    wordmark_sub: z.string().optional(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    cta_label: z.string().optional(),
    cta_href: z.string().optional(),
    cta_show_dropdown: z.boolean().optional(),
    properties_dropdown: z.array(z.object({
      label: z.string(),
      href: z.string(),
      location: z.string().optional()
    })).optional(),
    // footer.json fields
    brand_description: z.string().optional(),
    tagline: z.string().optional(),
    destinations_links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    collection_links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    contact_links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    endorser_text: z.string().optional(),
    copyright_year: z.string().optional()
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
