import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const ai = hubAI()

  const server = new McpServer({
    name: 'Echo',
    version: '1.0.0',
  })

  server.tool(
    'aiSearch',
    { message: z.string() },
    async ({ message }) => {
      const data = await ai.autorag('craig').aiSearch({ query: message })

      return {
        content: [{
          type: 'text', text: data.response,
        }],
      }
    },
  )
})
