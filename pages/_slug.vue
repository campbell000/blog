<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      const tagsList = await $content('tags')
        .only(['name', 'slug'])
        // this breaks things .where({ name: { $containsAny: article.tags } })
        .fetch()
      const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return { article, tags, prev, next }
    }
  }
</script>


<template>
  <articleDisplay :article="article" :tags="tags" :prev="prev" :next="next" />
</template>
