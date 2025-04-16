export default defineTask({
  meta: {
    name: 'upload',
    description: 'Upload files to the storage',
  },
  async run({ payload }) {
    const blob = hubBlob()
    const results = []

    if (!payload || !Array.isArray(payload)) {
      throw new Error('Payload must be an array of repositories with files')
    }

    for (const { repo, files } of payload) {
      if (!repo || !files || !Array.isArray(files)) {
        continue
      }

      for (const item of files) {
        const response = await fetchFile(repo, item.path)

        const contentType = getContentType(item.path)
        await blob.put(item.path, response.file.contents, {
          prefix: repo,
          contentType,
        })

        results.push({
          repo,
          path: item.path,
          size: item.size,
          contentType,
        })
      }
    }

    return results
  },
})
