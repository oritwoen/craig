import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  // @ts-expect-error globalThis.__env__ is not defined
  const ai = process.env.AI || globalThis.__env__?.AI || globalThis.AI
  const res = event.node.res

  const MCPServer = new McpServer({
    name: 'craig',
    version: '0.1.0',
  }, {
    capabilities: {},
  })

  MCPServer.tool(
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

  const transport = new SSEServerTransport('/message', res)

  MCPTransports[transport.sessionId] = transport

  res.on('close', () => {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete MCPTransports[transport.sessionId]
  })

  await MCPServer.connect(transport)
})
