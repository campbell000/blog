<script>
  export default {
    props: {
      article: {
        type: Object,
        default: () => null
      },
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      },
      inList: {
        type: Boolean,
        default: () => false
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
  <article>
    <h1 class="">{{ article.title }}</h1>
    <p>{{ article.summary }}</p>
    <img :src="article.titleImage" :alt="article.titleImageAlt" />
    <p>Written At: {{ formatDate(article.createdAt) }}</p>
    <p v-if="article.shouldShowUpdatedAt">Last updated: {{ formatDate(article.updatedAt) }}</p>
    <nav v-if="article.shouldShowTableOfContents">
      <h2>Contents</h2>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <nuxt-content :document="article" />
    <prev-next :prev="prev" :next="next" />
    <br v-if="inList"/>
    <v-divider v-if="inList"></v-divider>
    <br v-if="inList"/>
  </article>
</template>

<style>
  h1 {
    font-weight: bold;
    font-size: 50px;
  }
  h2 {
    font-weight: bold;
    font-size: 22px;
  }
  nuxt-content p {
    margin-bottom: 20px;
  }

</style>
