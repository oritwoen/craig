import type { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js'

export const MCPTransports: { [sessionId: string]: SSEServerTransport } = {}
