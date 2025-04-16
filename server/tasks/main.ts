export default defineTask({
  meta: {
    name: 'main',
    description: 'Main task to fetch and upload files',
  },
  async run() {
    const files = await runTask('fetch')
    const upload = await runTask('upload', { payload: files })

    return {
      files,
      upload,
    }
  },
})
