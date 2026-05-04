import type { ReactNode } from 'react'

export type ProjectSlug =
  | 'backseat-lovers-album-cover'
  | 'monster-icons'
  | 'gamer-audience-staged-photo'
  | 'van-gogh-clock'
  | 'magazine-spread'
  | 'editorial-illustration'
  | 'bodoni-type-specimen-poster'
  | 'pearl-jam-poster'
  | 'smokey-guinness-poster'
  | 'collage'
  | 'netherlands-postcards'
  | 'elmers-glue-animation'
  | 'hot-sauce-bottles'
  | '8-bit-dog-webzine'
  | 'finventory'

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
    For the Gamer Audience Staged Photo project, I was given an audience and had to create a staged
    photograph that would appeal to them. I chose a gaming audience and based my concept around{' '}
    <em>Splatoon 2</em>, using its characters along with a Nintendo Switch. I arranged the scene to
    reflect the bright, playful energy of the game, while also making it feel like a real moment a
    gamer might experience. The goal was to clearly communicate the intended audience through the
    objects, composition, and overall mood of the photo.
  </>
)

const monsterIconsIntro = (
  <>
    For the Monster Icons project, I was asked to create a set of icons using only black and white. I
    designed a series of monster-inspired icons, focusing on simplifying each character into clear,
    readable shapes. Because color was not an option, I relied heavily on contrast, silhouette, and
    line work to define each design. The goal of this project was to create icons that were visually
    consistent and easily recognizable, while still giving each monster its own personality.
  </>
)

const backseatLoversIntro = (
  <>
    For the Backseat Lovers Album Cover project, I was tasked with creating an album cover concept
    for the band The Backseat Lovers. I chose to focus on the word “hurry” as the main idea, and used
    collage design elements to build the composition. By layering different images and textures, I
    created a sense of movement and urgency that connects back to the word. The overall goal was to
    visually represent a feeling rather than a specific scene, while using collage techniques to
    create depth and interest.
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
    For the Editorial Illustration project, I created an image based on an article about the new
    Starbucks CEO, Brian Niccol, who previously worked at Chipotle. An editorial illustration is
    meant to visually represent and support a written article, often simplifying or highlighting its
    main idea. My illustration focused on the idea of making Starbucks a happier place, especially in
    response to how unhappy many baristas have been. I aimed to capture this shift in tone through
    imagery that reflects both the current issues and the intended improvement.
  </>
)

const bodoniTypeSpecimenIntro = (
  <>
    For the Bodoni Type Specimen Poster project, I was assigned the typeface Bodoni and asked to
    create a poster that showcased its features. I focused on highlighting the font’s contrast,
    elegance, and structure by incorporating ligatures and ornaments into the design. Through scale,
    spacing, and layout, I aimed to make the poster both visually interesting and informative. The
    goal was to demonstrate an understanding of the typeface while creating a clean and organized
    composition.
  </>
)

const pearlJamPosterIntro = (
  <>
    For the Pearl Jam Poster project, I created a custom poster featuring Pearl Jam, focusing on the
    band’s lead singer, Eddie Vedder. I based the design on the album <em>Ten</em>, using its recognizable
    font and color palette to guide the overall look. I aimed to capture the tone and energy of the
    band while still making the poster feel like my own design. Through composition, typography, and
    color choices, I created a piece that references the original album while also functioning as a
    strong standalone poster.
  </>
)

const smokeyGuinnessPosterIntro = (
  <>
    For the Smokey Guinness Poster project, I designed a custom poster featuring Smokey, the mascot
    for the University of Tennessee. I illustrated Smokey holding a Guinness and incorporated the slogan
    “Lovely Day for a Guinness” into the design. I focused on balancing the character with the typography
    to make sure both the image and the phrase worked together clearly. The goal was to create a playful
    and recognizable poster by combining a well-known mascot with an established slogan, while keeping
    the overall composition clean and visually engaging.
  </>
)

const collageIntro = (
  <>
    For the Collage project, I was given a stack of magazines and asked to create a composition using
    only those materials. I chose to include an image of me and my boyfriend as the central focus, and
    then surrounded it with images of things I love. By layering and arranging these elements, I
    created a piece that felt personal and expressive. The goal of this project was to explore
    composition and storytelling through found imagery, while using collage as a way to combine
    different ideas into one cohesive design.
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
    For the 8-bit Dog Webzine project, I created a digital magazine inspired by my earlier magazine
    spread. The webzine focused on different dog breeds, as well as dog toys, food, and everyday
    necessities. I designed it to feel playful and engaging while still being easy to navigate in a
    digital format. By organizing the content clearly and keeping a consistent visual style, I was
    able to translate a print concept into an interactive experience. The goal was to explore how
    editorial design can function in a digital space.
  </>
)

const finventoryIntro = (
  <>
    For the Finventory project, I created an app centered around a collection of fish that I illustrated
    and then brought to life through code. I started by drawing a variety of different fish,
    focusing on giving each one a distinct shape and personality. After that, I coded them to move
    and swim around the screen, creating a more interactive and animated experience. The motion was an
    important part of the project, as it helped make the app feel more engaging rather than static.
    The goal was to combine illustration and basic coding to create something playful, while also
    exploring how movement can enhance a digital design.
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
    next: { slug: 'bodoni-type-specimen-poster', label: 'Bodoni Type Specimen Poster' },
    intro: editorialIllustrationIntro,
  },
  {
    slug: 'bodoni-type-specimen-poster',
    title: 'Bodoni Type Specimen Poster',
    shortTitle: 'Bodoni Type Specimen Poster',
    coverImage: '/images/work/bodoni-type-specimen-poster.png',
    next: { slug: 'pearl-jam-poster', label: 'Pearl Jam Poster' },
    intro: bodoniTypeSpecimenIntro,
  },
  {
    slug: 'pearl-jam-poster',
    title: 'Pearl Jam Poster',
    shortTitle: 'Pearl Jam Poster',
    coverImage: '/images/work/pearl-jam-poster.png',
    next: { slug: 'smokey-guinness-poster', label: 'Smokey Guinness Poster' },
    intro: pearlJamPosterIntro,
  },
  {
    slug: 'smokey-guinness-poster',
    title: 'Smokey Guinness Poster',
    shortTitle: 'Smokey Guinness Poster',
    coverImage: '/images/work/smokey-guinness-poster.png',
    next: { slug: 'collage', label: 'Collage' },
    intro: smokeyGuinnessPosterIntro,
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
    next: { slug: 'finventory', label: 'Finventory' },
    intro: eightBitDogWebzineIntro,
  },
  {
    slug: 'finventory',
    title: 'Finventory',
    shortTitle: 'Finventory',
    coverVideo: '/video/finventory-recording.mp4',
    next: { slug: 'backseat-lovers-album-cover', label: 'Backseat Lovers Album Cover' },
    intro: finventoryIntro,
  },
]

export const projectBySlug = Object.fromEntries(
  projects.map((p) => [p.slug, p])
) as Record<ProjectSlug, ProjectMeta>
