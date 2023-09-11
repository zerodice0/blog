import { cache } from 'react'
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export const fetchMdx = cache(
  async (fetchPath: string) => {
    const fetched = await fs.readdir(fetchPath)

    return await Promise.all(
      fetched.filter((file: string) => path.extname(file) === '.mdx')
        .map(async (file: string) => {
          const filePath = `${fetchPath}/${file}`

          const fileContent = await fs.readFile(filePath, 'utf8')
          const { data, content } = matter(fileContent)

          return { ...data, body: content }
        })
    )
  }

)
