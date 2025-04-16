export default defineTask({
  meta: {
    name: 'fetch',
    description: 'Fetch content from all configured repositories',
  },
  async run() {
    const results = []

    for (const repo of repos) {
      const files = await fetchFiles(repo)

      // Filter files by allowed extensions
      const filteredFiles = files.filter((item) => {
        const ext = item.path.split('.').pop()?.toLowerCase() || ''
        return allowedExts.includes(ext)
      })

      results.push({
        repo,
        files: filteredFiles,
      })
    }

    return results
  },
})
