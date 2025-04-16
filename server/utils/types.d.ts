export interface GithubFileInfo {
  path: string
  mode: string
  sha: string
  size: number
}

export interface GithubFileResponse {
  meta: {
    url: string
  }
  file: {
    contents: string
    html?: string
  }
}

export interface GithubFilesResponse {
  meta: {
    sha: string
  }
  files: GithubFileInfo[]
}

export interface BlobOptions {
  prefix?: string
  contentType?: string
}

export interface BlobListOptions {
  limit?: number
  cursor?: string
}

export interface HubBlob {
  put(path: string, contents: string, options?: BlobOptions): Promise<void>
  get(path: string, options?: BlobOptions): Promise<string | null>
  list(options?: BlobListOptions): Promise<{items: any[], cursor?: string}>
}
