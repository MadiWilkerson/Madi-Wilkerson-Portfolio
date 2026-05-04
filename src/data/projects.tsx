import type { ReactNode } from 'react'

export type ProjectSlug =
  | 'backseat-lovers-album-cover'
  | 'monster-icons'
  | 'gamer-audience-staged-photo'
  | 'van-gogh-clock'
  | 'scribbld'
  | 'magazine-spread'
  | 'netherlands-postcards'
  | 'elmers-glue-animation'
  | 'hot-sauce-bottles'

export type ProjectMeta = {
  slug: ProjectSlug
  title: string
  shortTitle: string
  /** Work grid thumbnail; omit for grey placeholder square. */
  coverImage?: string
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

const scribbldIntro = (
  <>
    SCRIBBLD was my idea for a project titled <em>Public, Utility.</em> The idea formed from the
    thought of wanting to protect public privacy, making the user draw what they see instead of
    taking photos of people and their belongings. Once the app was starting to be designed, I
    changed my direction, and made SCRIBBLD into a game, where the user gets a new prompt every 15
    minutes and has to draw the prompt, however many times they want until the timer is up. It is
    modeled after a social media app, where other users are able to like the SCRIBBLS, but no
    words other than usernames are used on the app.
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
    next: { slug: 'scribbld', label: 'SCRIBBLD' },
    intro: clockIntro,
  },
  {
    slug: 'scribbld',
    title: 'SCRIBBLD',
    shortTitle: 'SCRIBBLD',
    next: { slug: 'magazine-spread', label: 'Magazine Spread' },
    intro: scribbldIntro,
  },
  {
    slug: 'magazine-spread',
    title: 'Magazine Spread',
    shortTitle: 'Magazine Spread',
    next: { slug: 'netherlands-postcards', label: 'Netherlands Postcards' },
    intro: magazineIntro,
  },
  {
    slug: 'netherlands-postcards',
    title: 'Netherlands Postcards',
    shortTitle: 'Netherlands Postcards',
    next: { slug: 'elmers-glue-animation', label: 'Elmer’s Glue Animation' },
    intro: postcardIntro,
  },
  {
    slug: 'elmers-glue-animation',
    title: 'Elmer’s Glue Animation',
    shortTitle: 'Elmer’s Glue Animation',
    next: { slug: 'hot-sauce-bottles', label: 'Hot Sauce Bottles' },
    intro: glueIntro,
  },
  {
    slug: 'hot-sauce-bottles',
    title: 'Hot Sauce Bottles',
    shortTitle: 'Hot Sauce Bottles',
    next: { slug: 'backseat-lovers-album-cover', label: 'Backseat Lovers Album Cover' },
    intro: hotSauceIntro,
  },
]

export const projectBySlug = Object.fromEntries(
  projects.map((p) => [p.slug, p])
) as Record<ProjectSlug, ProjectMeta>
