export async function fetchFiles(repo: string): Promise<GithubFileInfo[]> {
  const { files } = await $fetch<GithubFilesResponse>(`https://ungh.cc/repos/${repo}/files/main`)

  return files
}

export async function fetchFile(repo: string, path: string): Promise<GithubFileResponse> {
  return await $fetch<GithubFileResponse>(`https://ungh.cc/repos/${repo}/files/main/${path}`)
}
