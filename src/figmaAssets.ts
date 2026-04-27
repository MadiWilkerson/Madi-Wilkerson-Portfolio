/**
 * Image URLs from Figma MCP export. These point to Figma’s temporary asset CDN and may expire
 * after about a week. Export PNGs from Figma to `public/images/` and update paths to keep
 * the site self-contained.
 */
export const figma = {
  logoHome: 'https://www.figma.com/api/mcp/asset/7d723871-23c2-46f1-be31-07f1142d3e59',
  logoHeader: 'https://www.figma.com/api/mcp/asset/6bac1a00-9a29-44bd-8074-772c8de3d880',
  menuLines: 'https://www.figma.com/api/mcp/asset/06605406-86be-4eb1-bed4-1a9cd1d1afe4',
  aboutPhoto:
    'https://www.figma.com/api/mcp/asset/7129eb26-27cb-42ae-90e3-bf6ddba4c08c',
  iconEmail: 'https://www.figma.com/api/mcp/asset/4386bf5c-c611-4445-a7d7-e02cb13b9bf7',
  iconLinkedin: 'https://www.figma.com/api/mcp/asset/c796bb44-9f95-40c9-bfbb-5caa9071b466',
  iconInstagram: 'https://www.figma.com/api/mcp/asset/6c1c317b-2068-41fe-9cda-a41946edf2d4',
  clock: {
    hero: 'https://www.figma.com/api/mcp/asset/ef34c11f-427a-42a0-96a8-761239cd3611',
    yellow: 'https://www.figma.com/api/mcp/asset/719b7d58-7431-4ff3-8831-3c0ed9aa3ed2',
    blue: 'https://www.figma.com/api/mcp/asset/626fabb5-19b0-41c3-8288-cbea4c707597',
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
