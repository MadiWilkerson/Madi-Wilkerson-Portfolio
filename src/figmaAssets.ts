/**
 * Image URLs from Figma MCP export. These point to Figma’s temporary asset CDN and may expire
 * after about a week. Export PNGs from Figma to `public/images/` and update paths to keep
 * the site self-contained.
 */
export const figma = {
  logoHome: 'https://www.figma.com/api/mcp/asset/d90d8292-30d0-4dbb-bab0-336e6e5712a2',
  logoHeader: 'https://www.figma.com/api/mcp/asset/388cae66-b759-42e3-9ae3-6aca9e59270f',
  menuLines: 'https://www.figma.com/api/mcp/asset/bd221004-ea55-4094-befe-bb53e318b907',
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
    a: 'https://www.figma.com/api/mcp/asset/69dd9dde-d38c-4097-884c-1c11a8c3dc51',
    b: 'https://www.figma.com/api/mcp/asset/61398b2a-8469-4c6d-ae1f-b40fc0a3c40e',
  },
  postcards: {
    amstel: 'https://www.figma.com/api/mcp/asset/73a7f7cd-516d-460d-b88a-32c6143f9241',
    gingerbread: 'https://www.figma.com/api/mcp/asset/ccc691b3-e78f-4836-8656-c7a2b18d8e40',
    vangogh: 'https://www.figma.com/api/mcp/asset/2b8bd9b4-7540-4371-9d47-f8d3a797d349',
    tulips: 'https://www.figma.com/api/mcp/asset/eb08ef14-9090-44ca-9dbd-21eef84fdb5e',
    windmill: 'https://www.figma.com/api/mcp/asset/4d927557-4617-4939-a019-77654567ee52',
  },
  hotSauce: {
    bottle1: 'https://www.figma.com/api/mcp/asset/9f39046a-4965-4f40-b3df-7ac3eae5631e',
    labels1: 'https://www.figma.com/api/mcp/asset/da9a39ba-2114-4315-b100-5b4e18dbb500',
    bottle2: 'https://www.figma.com/api/mcp/asset/7a51120a-0edd-4951-b56f-be305c3dd610',
    labels2: 'https://www.figma.com/api/mcp/asset/4abe0692-1af6-4646-a9ba-a6a962a56464',
  },
} as const
