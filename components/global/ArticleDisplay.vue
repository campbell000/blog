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
      tags: {
        type: Object,
        default: () => null
      },
      inList: {
        type: Boolean,
        default: () => false
      },
    },
    methods:{
      formatDate(dateStr) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateStr).toLocaleDateString('en', options)
      }
    },
  }
</script>

<template>
  <article>
    <div class="titleBlock" >
      <h1 class="articleTitle">{{ inList ? 'Post: ' : '' }}{{ article.title }}</h1>
      <div class="writtenAt">Written At: {{ formatDate(article.createdAt) }}</div>
      <div class="updatedAt" v-if="article.shouldShowUpdatedAt">Last updated: {{ formatDate(article.updatedAt) }}</div>
      <div class="tags">Tags:
        <span v-for="(tag, id) in article.tags" :key="id">
          <NuxtLink class="tag linkTag" v-if="tags[tag] != null" :to="`/posts/${tags[tag].slug}`">{{tags[tag].name}}</NuxtLink>
          <span v-if="tags[tag] == null" class="tag" v-text="tag"></span>
          <span class="tagDivider" v-if="id < article.tags.length - 1"> | </span>
        </span>
      </div>

    </div>
    
    <div class="metadata">
      <div class="summary">{{ article.summary }}</div>
    </div>

    <div v-if="article.titleImage != null" class="imageContainer">
      <img  class="titleImage" :class="article.isSmallTitleImage ? 'small' : ''" :src="article.titleImage" :alt="article.titleImageAlt" />
    </div>
    
    <nav class="contentsContainer" v-if="article.shouldShowTableOfContents">
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

<style scoped>
  .titleBlock {
    margin-bottom: 14px;
  }

  .writtenAt, .updatedAt {
    font-style: italic;
    color: #777777;
  }

  .articleTitle {
    margin-bottom: 0px;
  }

  .contentsContainer {
    margin-top: 15px;
  }

  .tags {
    font-style: italic;
    color: #777777;
  }

  .tag {
    padding-left: 2px;
    padding-right: 2px;
  }

  .tagDivider {
    margin-left: 1px;
    margin-right: 1px;
  }

  .metadata {
    color: #777777;
  }

  h1 {
    font-weight: bold;
    font-size: 40px;
    
  }
  h2 {
    margin-top: 20px;
    font-weight: bold;
    font-size: 24px;
  }
  nuxt-content p {
    margin-bottom: 20px;
  }

  .imageContainer {
    padding-top: 30px;
    padding-bottom: 30px;
    width: 100%;
    text-align: center;
  }

  .imageContainer > img {
    width: 100%;
    max-width: 100%;
  }

  img.small,
  .imageContainer > img.small {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    max-width: 50%;
  }

  ul {
    margin-bottom: 15px;
  }

  article {
    padding-bottom: 30px;
  }

</style>
