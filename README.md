# Craig

A Model Context Protocol (MCP) implementation for searching markdown documentation from UnJS and Nuxt ecosystems.

## Overview

Craig provides a specialized MCP service for retrieving, indexing, and searching through markdown documentation from repositories within the UnJS and Nuxt organizations. It enables AI assistants to access up-to-date information about these libraries and frameworks.

## Features

- Automatically fetches markdown documentation from UnJS and Nuxt repositories
- Stores files in Cloudflare R2 storage using AutoRAG
- Provides MCP-compatible API endpoints for AI tools
- Scheduled tasks for regular content updates

## Technical Stack

- Built with [Nuxt](https://nuxt.com/)
- Uses [NuxtHub](https://hub.nuxt.com/) for AI and Workers
- Deploys to [Cloudflare Workers](https://workers.cloudflare.com/)
- Leverages Cloudflare AutoRAG for retrieval-augmented generation
- Implements [Model Context Protocol](https://modelcontextprotocol.ai/) for AI integration

## API Endpoints

- `/api/blobs` - List all stored content
- `/files/:pathname` - Serve specific files
- `/sse` - Server-Sent Events endpoint with MCP integration for AI search

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Indexed Repositories

Currently indexed repositories include:
- unjs/h3
- unjs/db0
- unjs/ungh
- unjs/jiti
- unjs/ofetch
- unjs/consola
- unjs/unstorage

To modify the tracked repositories, edit `server/utils/repos.ts`.

## Roadmap

- Support for additional repositories from UnJS, Nuxt, and related ecosystems
- Indexing GitHub issues for context on bug reports and feature requests
- Integration with GitHub discussions for design decisions and community insights
- Tracking pull requests to provide information on upcoming features and fixes
- Support for additional file formats beyond markdown
- Advanced search filtering and categorization
- API improvements for more specialized queries

---

Created with ❤️ for UnJS and Nuxt ecosystems.
