
<template>
  <article>
    <h1>{{ article.title }}</h1>
    <p>{{ article.summary }}</p>
    <img :src="article.titleImage" :alt="article.titleImageAlt" />
    <p>Written At: {{ formatDate(article.createdAt) }}</p>
    <p v-if="article.shouldShowUpdatedAt">Last updated: {{ formatDate(article.updatedAt) }}</p>
    <nuxt-content :document="article" />
    <nav v-if="article.shouldShowTableOfContents">
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>

  </article>
</template>


<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    },
    methods:{
      formatDate(dateStr) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateStr).toLocaleDateString('en', options)
      }
    }
  }
</script>

<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }

</style>
