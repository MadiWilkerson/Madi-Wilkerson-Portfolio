/**
 * Image URLs from Figma MCP export. These point to Figma’s temporary asset CDN and may expire
 * after about a week. Export PNGs from Figma to `public/images/` and update paths to keep
 * the site self-contained.
 */
export const figma = {
  logoHome: 'https://www.figma.com/api/mcp/asset/d90d8292-30d0-4dbb-bab0-336e6e5712a2',
  logoHeader: 'https://www.figma.com/api/mcp/asset/388cae66-b759-42e3-9ae3-6aca9e59270f',
  aboutPhoto:
    'https://www.figma.com/api/mcp/asset/080019f3-b80e-4567-9588-30585c7737d7',
  iconEmail: 'https://www.figma.com/api/mcp/asset/5cfb5572-e7b5-49e5-a21a-aa244e5975e3',
  iconLinkedin: 'https://www.figma.com/api/mcp/asset/066ae891-7891-433b-9cda-bc4e02cb988e',
  iconInstagram: 'https://www.figma.com/api/mcp/asset/487cb446-0d5f-4735-ac72-0aa34f3adde6',
  clock: {
    hero: 'https://www.figma.com/api/mcp/asset/fbd8eb09-556d-4926-a978-2da2e598d484',
    yellow: 'https://www.figma.com/api/mcp/asset/312e189f-c529-421c-b825-39e9cc11e0fe',
    blue: 'https://www.figma.com/api/mcp/asset/940846bc-c8a9-4d98-9a81-7af82921b545',
  },
  magazine: {
    /** Full spread hero from Figma (magazinespreadportfolio) */
    hero: 'https://www.figma.com/api/mcp/asset/bf9601a9-dafd-4b92-9857-6d16879c1e28',
    /** Pixel detail assets below the hero */
    detailLeft: 'https://www.figma.com/api/mcp/asset/c8075e4c-ac27-46b9-b9a8-744f52872768',
    detailRight: 'https://www.figma.com/api/mcp/asset/c46e9231-3a60-47d1-80c2-da144b80edc8',
  },
  postcards: {
    amstel: 'https://www.figma.com/api/mcp/asset/9fefba82-d69a-4951-8c33-eed996a64909',
    gingerbread: 'https://www.figma.com/api/mcp/asset/56a40591-781f-4f55-9465-eb9d831578d9',
    vangogh: 'https://www.figma.com/api/mcp/asset/e8a67b00-5e15-4909-9e76-72f6edd8e77f',
    tulips: 'https://www.figma.com/api/mcp/asset/fac6742c-d6c1-4783-8038-f77631b9d474',
    windmill: 'https://www.figma.com/api/mcp/asset/27ddc053-c5d4-4493-ad14-15781643f634',
    /**
     * Windmill motion study: Figma node has no MCP image URL yet; using the static windmill
     * art as fallback. Export the motion frame from Figma to `public/images/postcards/windmill-motion.jpg`
     * and set `windmillMotion` to that path when ready.
     */
    windmillMotion: 'https://www.figma.com/api/mcp/asset/27ddc053-c5d4-4493-ad14-15781643f634',
    backs: {
      pb1: 'https://www.figma.com/api/mcp/asset/b14e7775-f37c-43a1-a14a-fdf697a5cf8f',
      pb2: 'https://www.figma.com/api/mcp/asset/cf3d0e24-9eb0-49ee-a86f-d595af6efeda',
      pb3: 'https://www.figma.com/api/mcp/asset/73a61743-05a5-487c-8b56-e670e8fdbe29',
      pb4: 'https://www.figma.com/api/mcp/asset/04734827-5fe0-40ab-b90f-003e66dac488',
      back: 'https://www.figma.com/api/mcp/asset/9a1be533-252d-4c19-8fad-09b373eadb1c',
    },
  },
  hotSauce: {
    bottle1: 'https://www.figma.com/api/mcp/asset/9f39046a-4965-4f40-b3df-7ac3eae5631e',
    labels1: 'https://www.figma.com/api/mcp/asset/da9a39ba-2114-4315-b100-5b4e18dbb500',
    bottle2: 'https://www.figma.com/api/mcp/asset/7a51120a-0edd-4951-b56f-be305c3dd610',
    labels2: 'https://www.figma.com/api/mcp/asset/4abe0692-1af6-4646-a9ba-a6a962a56464',
  },
} as const
