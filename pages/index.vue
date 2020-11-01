<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'summary', 'titleImage', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>

<template>
  <div>
    <h1>Blog Posts</h1>
    <ul style='list-style: none'>
      <li v-for="article of articles" :key="article.slug">
          <div>
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }"><h2>{{ article.title }}</h2></NuxtLink>
            <p>{{ article.summary }}</p>
          </div>
      </li>
    </ul>
  </div>
</template>