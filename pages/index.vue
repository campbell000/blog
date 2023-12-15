<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .sortBy('createdAt', 'desc')
        .limit(6)
        .fetch()
      
      const articleTagMap = {};
      for (const article of articles) {
        const tagsList = await $content('tags')
        .only(['name', 'slug'])
         // this breaks things: .where({ name: { $containsAny: article.tags } })
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
      <articlePreview v-for="article of articles" :article="article"/>
      <v-row>
        <v-col :lg="12" class="nextPrevLink next">
          <NuxtLink to="/posts" style="cursor: pointer;" class="morePosts" tag="button">More Posts</NuxtLink>
        </v-col>
      </v-row>
  </div>
</template>

<style scoped>
  article::after {
    margin-bottom: 50px;
  }

  .morePosts {
    cursor: pointer;
    border: 1px solid var(--v-anchor-base);
    padding: 8px;
    width: 100%;
  }

  .morePosts:hover {
    background-color: var(--v-anchor-base);
    opacity: 0.8;
  }
</style>