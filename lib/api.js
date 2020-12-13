import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')
const imagesDirectory = join(process.cwd(), '_images')


export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}

//========

export function getImageSlugs() {
  return fs.readdirSync(imagesDirectory)
}

export function getImageBySlug(slug, fields = []) {
  const name = slug.replace(/\.jpg$/, '')
  const realSlug = slug //.replace(/\.jpeg$/, '')
  const fullPath = join(imagesDirectory, `${realSlug}`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = fullPath
    }
    if (field === 'name') {
      items[field] = name
    }
    if (field === 'data') {
      items[field] = data
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllImages(fields = []) {
  const slugs = getImageSlugs()
  const images = slugs

    .map((slug) => getImageBySlug(slug, fields))
    // // sort posts by date in descending order
    // .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return images
}


