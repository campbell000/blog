<template>
  <PostList :articles="articles" :selectedTag="tag" :allTags="tags" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tags = await $content('tags').sortBy('name').fetch()
    const tt = await $content('tags')
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch()
    const tag = tt.length > 0 ? tt[0] : {}
    const articles = await $content('articles', params.slug)
      .where({ tags: { $contains: tag.name } })
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      articles,
      tag,
      tags
    }
  },
}
</script>