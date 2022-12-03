<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .sortBy('createdAt', 'desc')
        .limit(1)
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
      <articleDisplay v-for="article of articles" :key="article.slug" :tags="articleTagMap[article.slug]" :article="article" :isOnFrontPage="true"/>
      <v-row>
        <v-col :lg="6" class="nextPrevLink next">
          <NuxtLink :to="'/'+articles[0].slug+'#comments'" style="cursor: pointer" class="">Post Comments</NuxtLink>
        </v-col>
        <v-col :lg="6" class="nextPrevLink previous" style="text-align: end !important">
          <NuxtLink to="/posts" style="cursor: pointer;" class="">More Posts</NuxtLink>
        </v-col>
      </v-row>
  </div>
</template>

<style scoped>
  article::after {
    margin-bottom: 50px;
  }
</style>