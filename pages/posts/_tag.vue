<template>
  <PostList :articles="articles" :allTags="tags" />
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
    let articles = [];
    if (params.tag == "all") {
      articles = await $content('articles', params.slug)
            .only(['title', 'createdAt', 'summary', 'slug', 'isPasswordProtected'])
            .sortBy('createdAt', 'desc')
            .fetch()
    } else {
      articles = await $content('articles', params.slug)
            .only(['title', 'createdAt', 'summary', 'slug', 'isPasswordProtected'])
            .where({ tags: { $contains: tag.name } })
            .sortBy('createdAt', 'desc')
            .fetch()
    }
    return {
      articles,
      tag,
      tags
    }
  },
}
</script>