import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const FAMILY = z.enum(['adventure', 'nature', 'culture', 'taste', 'wellness']);
const STAMP = z.enum([
  'on-foot', 'summit', 'under-sail',
  'first-light', 'night-sky', 'the-reef',
  'village', 'market', 'craft',
  'harvest', 'local-kitchen', 'tasting',
  'stillness', 'movement', 'rest',
]);
const KIND = z.enum(['safari', 'lagoon', 'vintage', 'talavera', 'granite']);

const image = { image: z.string(), alt: z.string() };

// The CMS can save an emptied optional field as "" or null; treat both as absent
const blank = (v: unknown) => (v === '' || v === null ? undefined : v);
const optString = z.preprocess(blank, z.string().optional());
const optNumber = z.preprocess(blank, z.number().optional());
const seo = { seo_title: z.string(), seo_description: z.string() };
const page = (pattern: string) => ({ pattern, base: './src/content/pages' });

const settings = defineCollection({
  loader: glob({ pattern: 'site.json', base: './src/content/settings' }),
  schema: z.object({
    site_name: z.string(),
    default_description: z.string(),
    og_image: z.string(),
    nav: z.array(z.object({ label: z.string(), href: z.string(), badge: optString })),
    cta: z.object({ label: z.string(), href: z.string() }),
    footer_intro: z.string(),
    group_line: z.string(),
    contacts: z.array(z.object({ label: z.string(), href: z.string() })),
    social: z.preprocess(blank, z.array(z.object({ label: z.string(), href: z.string() })).default([])),
    newsletter: z.object({
      headline: z.string(),
      body: z.string(),
      button: z.string(),
      success: z.string(),
    }),
  }),
});

const places = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/places' }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    kind: KIND,
    kind_label: z.string(),
    region: z.string(),
    summary: z.string(),
    story: z.string(),
    leads: z.string(),
    hero_image: z.string(),
    hero_alt: z.string(),
    gallery: z.array(z.object(image)),
    expect: z.array(z.object({ label: z.string(), value: z.string() })),
    website: z.string(),
    website_label: z.string(),
    booking_url: optString,
    email: optString,
    phone: optString,
    has_place_mark: z.boolean().default(false),
    latitude: optNumber,
    longitude: optNumber,
  }),
});

const experiences = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/experiences' }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    family: FAMILY,
    stamp: STAMP,
    place: z.string(),
    led_by: z.string(),
    when: z.string(),
    live: z.string(),
    good_to_know: z.string(),
    image: optString,
    alt: optString,
  }),
});

const families = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/families' }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    direction: z.enum(['beyond', 'within']),
    summary: z.string(),
    shot: z.string(),
    ...image,
  }),
});

const stories = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    place: z.string(),
    family: z.preprocess(blank, FAMILY.optional()),
    author: z.string(),
    ...image,
    draft: z.boolean().default(false),
  }),
});

const home = defineCollection({
  loader: glob(page('home.json')),
  schema: z.object({
    ...seo,
    hero: z.object({
      kicker: z.string(),
      line_beyond: z.string(),
      line_within: z.string(),
      subtext: z.string(),
      video: z.string(),
      video_mobile: z.string(),
      poster: z.string(),
      beyond_alt: z.string(),
      beyond_caption: z.string(),
      within_image: z.string(),
      within_alt: z.string(),
      within_caption: z.string(),
    }),
    conviction: z.object({ statement: z.string(), title: z.string(), body: z.string() }),
    idea: z.object({
      headline: z.string(),
      beyond: z.object({ label: z.string(), title: z.string(), body: z.string(), example: z.string(), ...image }),
      within: z.object({ label: z.string(), title: z.string(), body: z.string(), example: z.string(), ...image }),
    }),
    pillars: z.object({
      intro: z.string(),
      items: z.array(z.object({ name: z.string(), label: z.string(), body: z.string(), ...image })),
      closing: z.string(),
    }),
    places: z.object({ headline: z.string(), body: z.string() }),
    families: z.object({ headline: z.string(), body: z.string() }),
    passport: z.object({ label: z.string(), headline: z.string(), body: z.string(), journal: z.string() }),
    moment: z.object({ line: z.string(), place: z.string(), ...image }),
    stories: z.object({ headline: z.string() }),
  }),
});

const about = defineCollection({
  loader: glob(page('about.json')),
  schema: z.object({
    ...seo,
    title: z.string(),
    lead: z.string(),
    ...image,
    conviction: z.object({ title: z.string(), body: z.string() }),
    explorean: z.object({
      headline: z.string(),
      types: z.array(z.object({ name: z.string(), body: z.string() })),
      closing: z.string(),
      ...image,
    }),
    promise: z.object({
      headline: z.string(),
      items: z.array(z.object({ name: z.string(), body: z.string() })),
    }),
    test: z.object({
      headline: z.string(),
      body: z.string(),
      questions: z.array(z.object({ name: z.string(), question: z.string() })),
    }),
  }),
});

const passport = defineCollection({
  loader: glob(page('passport.json')),
  schema: z.object({
    ...seo,
    title: z.string(),
    lead: z.string(),
    steps: z.array(z.object({ title: z.string(), body: z.string() })),
    spread: z.object({ headline: z.string(), body: z.string() }),
    rewards: z.array(z.object({ label: z.string(), title: z.string(), body: z.string() })),
    rewards_note: z.string(),
    journal: z.object({
      headline: z.string(),
      body: z.string(),
      privacy: z.string(),
      prompts: z.array(z.object({ direction: z.enum(['beyond', 'within']), prompt: z.string() })),
      ...image,
    }),
  }),
});

const placesPage = defineCollection({
  loader: glob(page('places.json')),
  schema: z.object({ ...seo, title: z.string(), lead: z.string(), next_headline: z.string(), next_body: z.string(), ...image }),
});

const experiencesPage = defineCollection({
  loader: glob(page('experiences.json')),
  schema: z.object({ ...seo, title: z.string(), lead: z.string(), structure_note: z.string() }),
});

const storiesPage = defineCollection({
  loader: glob(page('stories.json')),
  schema: z.object({ ...seo, title: z.string(), lead: z.string() }),
});

const plan = defineCollection({
  loader: glob(page('plan.json')),
  schema: z.object({
    ...seo,
    title: z.string(),
    lead: z.string(),
    form_title: z.string(),
    consent: z.string(),
    button: z.string(),
    success_title: z.string(),
    success_body: z.string(),
    ...image,
  }),
});

export const collections = {
  settings,
  places,
  experiences,
  families,
  stories,
  home,
  about,
  passport,
  placesPage,
  experiencesPage,
  storiesPage,
  plan,
};
