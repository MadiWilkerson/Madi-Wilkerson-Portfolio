import type { ReactNode } from 'react'

export type ProjectSlug =
  | 'backseat-lovers-album-cover'
  | 'monster-icons'
  | 'gamer-audience-staged-photo'
  | 'van-gogh-clock'
  | 'magazine-spread'
  | 'editorial-illustration'
  | 'bodoni-type-specimin-poster'
  | 'collage'
  | 'netherlands-postcards'
  | 'elmers-glue-animation'
  | 'hot-sauce-bottles'
  | '8-bit-dog-webzine'

export type ProjectMeta = {
  slug: ProjectSlug
  title: string
  shortTitle: string
  /** Work grid thumbnail; omit for grey placeholder square. */
  coverImage?: string
  /** Looping muted video tile on Work page (shows full frame, contain). */
  coverVideo?: string
  /** Rotate through stills on Work page (e.g. hot sauce gallery), `slideIntervalMs` defaults to 10s. */
  coverSlides?: string[]
  slideIntervalMs?: number
  next: { slug: ProjectSlug; label: string }
  intro: ReactNode
}

const gamerAudienceStagedIntro = (
  <>
    Placeholder copy for <em>Gamer Audience Staged Photo</em>—a neon-lit tabletop setup built around
    a console, accessories, paint, and scattered “ink” accents to sell a playful, collectible vibe.
    Lorem ipsum dolor sit amet: replace this with your shot list, lighting notes, props, or post work
    when you are ready.
  </>
)

const monsterIconsIntro = (
  <>
    Placeholder summary for Monster Icons—a black-and-white set of whimsical character marks in a
    bold outline style, each shown at two sizes in a simple grid. Dolor sit amet, consectetur
    adipiscing elit: swap this text for your real brief, audience, process, or deliverables whenever
    you like.
  </>
)

const backseatLoversIntro = (
  <>
    This is placeholder copy for the Backseat Lovers album cover project. The collage treatment
    mixes torn-paper type, a vintage sports car, and a grainy background to match a lo-fi album
    sleeve. Lorem ipsum dolor sit amet, consectetur adipiscing elit—you can replace this paragraph
    with your real process notes, materials, and designer intent whenever you are ready.
  </>
)

const clockIntro = (
  <>
    The title of this project was <em>A Hero In Time.</em> After researching and choosing a person
    I felt was a hero, I began designing a clock that captured their life. I selected Van Gogh
    because even through all of his struggles, he was able to be an amazing and famous artist. I
    chose to make my clock more abstract by making it into the shape of a paint palette and using
    paint swatches as the numbers. The paint swatches were the colors of Van Gogh’s most well known
    painting, <em>Starry Night.</em>
  </>
)

const editorialIllustrationIntro = (
  <>
    Placeholder copy for <em>Editorial Illustration</em>—a vertical piece mixing a photo-based subject
    with hand-drawn ingredient lettering on a bold green field. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit: swap in your concept, headline, publication context, or materials
    when you are ready.
  </>
)

const bodoniTypeSpeciminIntro = (
  <>
    Placeholder copy for the <em>Bodoni</em> type specimen poster—a structured grid showcasing the full
    character set, oversized letter studies, and short historical copy in a cream, coral, and sage
    palette. Lorem ipsum dolor sit amet: replace this with your rationale, print specs, or coursework
    brief when you’re ready.
  </>
)

const collageIntro = (
  <>
    Placeholder copy for <em>Collage</em>—a black-background scrapbook-style piece with torn-paper
    type, mixed photo treatments, and playful cut-and-layer composition. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit: swap in your sources, theme, or process notes anytime.
  </>
)

const magazineIntro = (
  <>
    In the Magazine Spread project, I had to create a spread showing 10 products that I have used
    and liked, much like a celebrity sharing their favorite things. The goal was to focus on making
    the layout visually interesting and easy to read, while also using strong typography, clear
    captioning, and good organization. Overall, this project was about showing my understanding of
    design principles such as hierarchy, balance, contrast, alignment, and flow while using color
    and composition to create a specific mood.
  </>
)

const postcardIntro = (
  <>
    For the postcard project, I was tasked with creating a set of 5 postcards for a place of my
    choosing. Even though I’ve never been, I picked the Netherlands. I chose 5 places that I felt
    captured the Netherlands clearly and painted each of them with watercolors, and then, using a
    fine tip pen, I outlined some of the items on the postcards to help highlight what they were.
    After designing the postcards, I had to animate one of them, and I picked the windmill. Using
    Adobe After Effects, I made the windmill spin at a rate of 15 fps.
  </>
)

const glueIntro = (
  <>
    At the beginning of the semester, I selected an object, unknowing of what projects were to come.
    I selected a bottle of Elmer’s Glue, and throughout the semester, I studied my selected object
    and it’s form, then created a set of posters, all leading up to the final project, which was an
    animation. I used the glue to create letters for the three images, and used clay stop motion for
    the three short videos. After combining them all, the animation below was my final.
  </>
)

const hotSauceIntro = (
  <>
    For my hot sauce bottles, my first task was picking two different audiences and building a
    design around them. I chose to design around people who appreciated Mexican culture and people
    who had need for heat. For Los Muertos, I modeled each label after the Dia de los Muertos
    tradition of small paper banner cut outs, also known as papel picado. What The Fish focused on
    a spicy sauce that would pair well with fish, and had a few plays on words to really get the{' '}
    <em>spicy</em> point across.
  </>
)

const eightBitDogWebzineIntro = (
  <>
    <em>8-bit Dog Webzine</em>—screen recording of the pixel-art Dog Days essentials spread brought
    to life on screen. Loops automatically.
  </>
)

/** Local watercolor postcard art — Work grid carousel and project detail page. */
export const netherlandsPostcardAssets = [
  { src: '/images/work/postcard-vangogh.png', label: 'Van Gogh Museum' },
  { src: '/images/work/postcard-gingerbread.png', label: 'Gingerbread Houses' },
  { src: '/images/work/postcard-tulips.png', label: 'Bollenstreek' },
  { src: '/images/work/postcard-amstel.png', label: 'Amstel River' },
  { src: '/images/work/postcard-windmill.png', label: 'Windmills' },
] as const

export const projects: ProjectMeta[] = [
  {
    slug: 'backseat-lovers-album-cover',
    title: 'Backseat Lovers Album Cover',
    shortTitle: 'Backseat Lovers Album Cover',
    coverImage: '/images/work/backseat-lovers-album-cover.png',
    next: { slug: 'monster-icons', label: 'Monster Icons' },
    intro: backseatLoversIntro,
  },
  {
    slug: 'monster-icons',
    title: 'Monster Icons',
    shortTitle: 'Monster Icons',
    coverImage: '/images/work/monster-icons.png',
    next: { slug: 'gamer-audience-staged-photo', label: 'Gamer Audience Staged Photo' },
    intro: monsterIconsIntro,
  },
  {
    slug: 'gamer-audience-staged-photo',
    title: 'Gamer Audience Staged Photo',
    shortTitle: 'Gamer Audience Staged Photo',
    coverImage: '/images/work/gamer-audience-staged-photo.png',
    next: { slug: 'van-gogh-clock', label: 'Van Gogh Clock' },
    intro: gamerAudienceStagedIntro,
  },
  {
    slug: 'van-gogh-clock',
    title: 'Van Gogh Clock',
    shortTitle: 'Van Gogh Clock',
    coverImage: '/images/work/van-gogh-clock.png',
    next: { slug: 'magazine-spread', label: 'Magazine Spread' },
    intro: clockIntro,
  },
  {
    slug: 'magazine-spread',
    title: 'Magazine Spread',
    shortTitle: 'Magazine Spread',
    coverImage: '/images/work/magazine-spread.png',
    next: { slug: 'editorial-illustration', label: 'Editorial Illustration' },
    intro: magazineIntro,
  },
  {
    slug: 'editorial-illustration',
    title: 'Editorial Illustration',
    shortTitle: 'Editorial Illustration',
    coverImage: '/images/work/editorial-illustration.png',
    next: { slug: 'bodoni-type-specimin-poster', label: 'Bodoni Type Specimin Poster' },
    intro: editorialIllustrationIntro,
  },
  {
    slug: 'bodoni-type-specimin-poster',
    title: 'Bodoni Type Specimin Poster',
    shortTitle: 'Bodoni Type Specimin Poster',
    coverImage: '/images/work/bodoni-type-specimin-poster.png',
    next: { slug: 'collage', label: 'Collage' },
    intro: bodoniTypeSpeciminIntro,
  },
  {
    slug: 'collage',
    title: 'Collage',
    shortTitle: 'Collage',
    coverImage: '/images/work/collage.png',
    next: { slug: 'netherlands-postcards', label: 'Netherlands Postcards' },
    intro: collageIntro,
  },
  {
    slug: 'netherlands-postcards',
    title: 'Netherlands Postcards',
    shortTitle: 'Netherlands Postcards',
    coverSlides: netherlandsPostcardAssets.map((c) => c.src),
    slideIntervalMs: 10_000,
    next: { slug: 'elmers-glue-animation', label: 'Elmer’s Glue Animation' },
    intro: postcardIntro,
  },
  {
    slug: 'elmers-glue-animation',
    title: 'Elmer’s Glue Animation',
    shortTitle: 'Elmer’s Glue Animation',
    coverVideo: '/glue-animation.mp4',
    next: { slug: 'hot-sauce-bottles', label: 'Hot Sauce Bottles' },
    intro: glueIntro,
  },
  {
    slug: 'hot-sauce-bottles',
    title: 'Hot Sauce Bottles',
    shortTitle: 'Hot Sauce Bottles',
    coverSlides: ['/images/work/hot-sauce-los-bottle.png', '/images/work/hot-sauce-wtf-bottle.png'],
    slideIntervalMs: 10_000,
    next: { slug: '8-bit-dog-webzine', label: '8-bit Dog Webzine' },
    intro: hotSauceIntro,
  },
  {
    slug: '8-bit-dog-webzine',
    title: '8-bit Dog Webzine',
    shortTitle: '8-bit Dog Webzine',
    coverVideo: '/video/8-bit-dog-webzine.mp4',
    next: { slug: 'backseat-lovers-album-cover', label: 'Backseat Lovers Album Cover' },
    intro: eightBitDogWebzineIntro,
  },
]

export const projectBySlug = Object.fromEntries(
  projects.map((p) => [p.slug, p])
) as Record<ProjectSlug, ProjectMeta>
