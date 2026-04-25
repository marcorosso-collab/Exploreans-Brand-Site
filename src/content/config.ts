import { defineCollection, z } from 'astro:content';

// ─── Site settings ───
const settings = defineCollection({
  type: 'data',
  schema: z.object({
    site_title: z.string().optional(),
    meta_description: z.string().optional(),
    meta_keywords: z.string().optional(),
    og_title: z.string().optional(),
    og_description: z.string().optional(),
    og_image: z.string().optional(),
    nav_links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    cta_label: z.string().optional(),
    cta_href: z.string().optional(),
    brand_description: z.string().optional(),
    tagline: z.string().optional()
  })
});

// ─── Hero ───
const hero = defineCollection({
  type: 'data',
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
  type: 'data',
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
  type: 'data',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    intro_eyebrow: z.string(),
    intro_headline: z.string(),
    pillars: z.array(z.object({
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
  type: 'data',
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
  type: 'data',
  schema: z.object({
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    intro_eyebrow: z.string(),
    intro_headline: z.string(),
    intro_body: z.string(),
    experiences: z.array(z.object({
      title: z.string(),
      subtitle: z.string(),
      image: z.string(),
      image_alt: z.string().optional()
    }))
  })
});

// ─── Field Notes ───
const fieldnotes = defineCollection({
  type: 'data',
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
  type: 'data',
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

// ─── Journal / Newsletter ───
const journal = defineCollection({
  type: 'data',
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
  type: 'data',
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

export const collections = {
  settings,
  hero,
  letter,
  pillars,
  destinations,
  experiences,
  fieldnotes,
  planhotel,
  journal,
  properties
};
