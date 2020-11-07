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
    <h1 class="">{{ inList ? 'Post: ' : '' }}{{ article.title }}</h1>
    <div class="metadata">
      <div class="summary">{{ article.summary }}</div>
      <div class="writtenAt">Written At: {{ formatDate(article.createdAt) }}</div>
    </div>
    
    <p v-if="article.shouldShowUpdatedAt">Last updated: {{ formatDate(article.updatedAt) }}</p>
    <nav v-if="article.shouldShowTableOfContents">
      <h2>Contents</h2>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="imageContainer">
      <img  class="titleImage" :src="article.titleImage" :alt="article.titleImageAlt" />
    </div>
    
    <nuxt-content :document="article" />
    <prev-next :prev="prev" :next="next" />
    <br v-if="inList"/>
    <v-divider v-if="inList"></v-divider>
    <br v-if="inList"/>
  </article>
</template>

<style>
  .metadata {
    color: #777777;
    font-style: italic;
  }

  h1 {
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 14px;
  }
  h2 {
    font-weight: bold;
    font-size: 24px;
  }
  nuxt-content p {
    margin-bottom: 20px;
  }

  .imageContainer {
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    text-align: center;
  }

</style>
