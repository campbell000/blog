<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'summary', 'createdAt', 'slug', 'isPasswordProtected'])
        .sortBy('createdAt', 'desc')
        .fetch()
      
      const tags = await $content('tags').sortBy('name').fetch();
      tags.unshift({slug: "", name: "All"});
      return {
        articles, tags
      }
    }
  }
</script>

<template>
  <PostList :articles="articles" :allTags="tags" />
</template>