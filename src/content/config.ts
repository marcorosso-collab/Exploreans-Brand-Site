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
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    title: z.string(),
    body: z.string(),
    background_image: z.string(),
    background_image_alt: z.string().optional(),
    scroll_indicator: z.string().optional()
  })
});

// ─── Philosophy Letter ───
const letter = defineCollection({
  type: 'content',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    chapter_label: z.string(),
    headline: z.string(),
    lead: z.string(),
    body: z.string(),
    signature: z.string()
  })
});

// ─── Brand Pillars ───
const pillars = defineCollection({
  type: 'content',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    intro_eyebrow: z.string(),
    intro_headline: z.string(),
    items: z.array(z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      image: z.string(),
      image_alt: z.string().optional()
    }))
  })
});

// ─── Destinations ───
const destinations = defineCollection({
  type: 'content',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    intro_eyebrow: z.string(),
    intro_headline: z.string(),
    intro_body: z.string()
  })
});

// ─── Experiences ───
const experiences = defineCollection({
  type: 'content',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    intro_eyebrow: z.string(),
    intro_headline: z.string(),
    intro_body: z.string(),
    items: z.array(z.object({
      title: z.string(),
      subtitle: z.string(),
      image: z.string(),
      image_alt: z.string().optional()
    }))
  })
});

// ─── Field Notes ───
const fieldnotes = defineCollection({
  type: 'content',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    intro_eyebrow: z.string(),
    intro_headline: z.string(),
    postcards: z.array(z.object({
      title: z.string(),
      location: z.string(),
      date: z.string(),
      image: z.string(),
      image_alt: z.string().optional()
    }))
  })
});

// ─── Planhotel Family ───
const planhotel = defineCollection({
  type: 'content',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    eyebrow: z.string(),
    headline: z.string(),
    body: z.string(),
    values: z.array(z.object({ value: z.string() })),
    sister_brands: z.array(z.object({
      name: z.string(),
      description: z.string(),
      logo: z.string().optional(),
      logo_alt: z.string().optional(),
      href: z.string()
    }))
  })
});

// ─── Newsletter ───
const newsletter = defineCollection({
  type: 'content',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    eyebrow: z.string(),
    headline: z.string(),
    supporting: z.string(),
    button_label: z.string()
  })
});

// ─── Properties ───
const properties = defineCollection({
  type: 'content',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    name: z.string(),
    short_name: z.string(),
    location: z.string(),
    tagline: z.string(),
    description: z.string(),
    hero_image: z.string(),
    hero_image_alt: z.string().optional(),
    specs_label: z.string().optional(),
    specs: z.array(z.object({ label: z.string(), value: z.string() })),
    cta_label: z.string(),
    cta_href: z.string(),
    show_in_nav: z.boolean().default(true)
  })
});

// ─── Legacy collections (for backward compatibility) ───
const homepage = defineCollection({
  type: 'content',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    title: z.string().optional(),
    body: z.string().optional(),
    background_image: z.string().optional(),
    background_image_alt: z.string().optional(),
    scroll_indicator: z.string().optional(),
    chapter_label: z.string().optional(),
    headline: z.string().optional(),
    lead: z.string().optional(),
    signature: z.string().optional(),
    intro_eyebrow: z.string().optional(),
    intro_headline: z.string().optional(),
    intro_body: z.string().optional(),
    items: z.array(z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional(),
      image_alt: z.string().optional()
    })).optional(),
    postcards: z.array(z.object({
      title: z.string(),
      location: z.string(),
      date: z.string(),
      image: z.string(),
      image_alt: z.string().optional()
    })).optional(),
    eyebrow: z.string().optional(),
    supporting: z.string().optional(),
    button_label: z.string().optional(),
    values: z.array(z.object({ value: z.string() })).optional(),
    sister_brands: z.array(z.object({
      name: z.string(),
      description: z.string(),
      logo: z.string().optional(),
      logo_alt: z.string().optional(),
      href: z.string()
    })).optional()
  })
});

const pillarsintro = defineCollection({
  type: 'content',
  schema: z.object({
    headline: z.string().optional(),
    supporting: z.string().optional()
  })
});

const placesintro = defineCollection({
  type: 'content',
  schema: z.object({
    eyebrow: z.string().optional(),
    headline: z.string().optional(),
    supporting: z.string().optional()
  })
});

const beyond = defineCollection({
  type: 'content',
  schema: z.object({
    headline: z.string().optional(),
    aside: z.string().optional()
  })
});

const notesintro = defineCollection({
  type: 'content',
  schema: z.object({
    eyebrow: z.string().optional(),
    headline: z.string().optional(),
    supporting: z.string().optional()
  })
});

const group = defineCollection({
  type: 'content',
  schema: z.object({
    label: z.string().optional(),
    headline: z.string().optional(),
    body: z.string().optional(),
    values: z.array(z.object({ value: z.string() })).optional()
  })
});

const sisterbrands = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number().optional(),
    name: z.string().optional(),
    mark: z.string().optional(),
    description: z.string().optional(),
    href: z.string().optional()
  })
});

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    eyebrow: z.string().optional(),
    headline: z.string().optional(),
    supporting: z.string().optional(),
    input_placeholder: z.string().optional(),
    button_label: z.string().optional(),
    success_message: z.string().optional()
  })
});

export const collections = {
  settings,
  hero,
  letter,
  pillars,
  destinations,
  experiences,
  fieldnotes,
  planhotel,
  newsletter,
  properties,
  homepage,
  pillarsintro,
  placesintro,
  beyond,
  notesintro,
  group,
  sisterbrands,
  journal
};
