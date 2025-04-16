export function getContentType(path: string): string {
  const ext = path.split('.').pop()?.toLowerCase() || ''

  const types: Record<string, string> = {
    md: 'text/markdown',
  }

  return types[ext] || 'application/octet-stream'
}
