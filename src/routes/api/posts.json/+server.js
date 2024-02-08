//Retrieved from https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
export const GET = async () => {
  const allPostFiles = import.meta.glob('../../blog/*/+page.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice('../..'.length, -'/+page.md'.length)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })

  return new Response(JSON.stringify(sortedPosts));
}
