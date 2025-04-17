export default defineEventHandler(async (event) => {
  const { req, res } = event.node
  const { sessionId } = getQuery(event)
  const body = await readBody(event)

  setResponseHeader(event, 'Content-Type', 'text/html')
  setResponseHeader(event, 'Cache-Control', 'no-cache')
  setResponseHeader(event, 'Transfer-Encoding', 'chunked')

  const transport = MCPTransports[sessionId as string]

  console.log(body)

  if (transport) {
    await transport.handlePostMessage(req, res, body)
  }

  if (!transport) {
    throw createError({ statusCode: 400, statusMessage: 'No transport found for sessionId' })
  }
})
