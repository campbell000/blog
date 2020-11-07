<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'summary', 'createdAt', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    },
    methods:{
      formatDate(dateStr) {
        var date = new Date(dateStr);
        var d = date.getDate();
        var m = date.getMonth() + 1; //Month from 0 to 11
        var y = date.getFullYear();
        return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
      }
    }
  }
</script>

<template>
  <div>
    <h1>All Posts</h1>
    <ul style='list-style: none'>
      <li v-for="article of articles" :key="article.slug">
          <div>
            <NuxtLink :to="{ name: 'slug', params: { slug: article.slug } }"><h2>{{ article.title }}</h2></NuxtLink>
            <p>{{formatDate(article.createdAt)}} -- {{ article.summary }}</p>
          </div>
      </li>
    </ul>
  </div>
</template>