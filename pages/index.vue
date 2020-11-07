<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .sortBy('createdAt', 'desc')
        .limit(5)
        .fetch()
        
      return {
        articles
      }
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
    <articleDisplay v-for="article of articles" :key="article.slug" :article="article" :inList="true"/>
  </div>
</template>


<style scoped>
  article::after {
    margin-bottom: 50px;
  }
</style>