<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .sortBy('createdAt', 'desc')
        .limit(5)
        .fetch()
      
      const tags = await $content('tags', params.slug)
        .only(['name', 'description', 'img', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()
      const articleTagMap = {};
      for (const article of articles) {
        const tagsList = await $content('tags')
        .only(['name', 'slug'])
        .where({ name: { $containsAny: article.tags } })
        .fetch()
        const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
        articleTagMap[article.slug] = tags;
      }
      return {articles, articleTagMap}
    },
    methods:{
      formatDate(dateStr) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateStr).toLocaleDateString('en', options)
      }
    }
  }
</script>

<template>
  <div>
    <articleDisplay v-for="article of articles" :key="article.slug" :tags="articleTagMap[article.slug]" :article="article" :inList="true"/>

   <NuxtLink to="/posts" tag="a" style="cursor: pointer" class="">See More Posts Here</NuxtLink>
  </div>
  
</template>


<style scoped>
  article::after {
    margin-bottom: 50px;
  }
</style>