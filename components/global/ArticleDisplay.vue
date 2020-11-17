<template>
  <article>
    <div class="titleBlock" >
      <h1 class="articleTitle">{{ inList ? '' : '' }}{{ article.title }}</h1>
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

    <div v-if="article.titleImage != null" class="imageContainer titleImageContainer">
      <img  class="titleImage" :class="article.isSmallTitleImage ? 'small' : (article.isMediumTitleImage ? 'medium' : '')" :src="article.titleImage" :alt="article.titleImageAlt" />
      <span v-if='article.titleImageCaption != null' class="titleImageCaption" v-text="article.titleImageCaption"></span>
    </div>
    
    <nav class="contentsContainer" v-if="article.shouldShowTableOfContents">
      <h2>Contents</h2>
      <ul>
        <li v-for="link of article.toc" :key="link.id" :class="link.depth == 2 ? 'tocLink' : 'tocInnerLink'">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    
    <nuxt-content :document="article" />
    <prev-next v-if="!inList" :prev="prev" :next="next" />
    <!--
    <br />
    <v-divider/>
    <br />
    <h3>Comments</h3>
    <form @submit.prevent="'onSubmit'">
      <v-text-field v-model="comment.name" type="text" required placeholder="Name" />
      <v-textarea outlined v-model="comment.message" required placeholder="Add a Comment" />
      <v-btn @click="submitComment()">Submit</v-btn>
    </form>
    <br />
    <v-divider/>
    -->
    

  </article>
</template>

<script>
  export default {
    data ({$axios}) {
      return {
        loading: false,
        comment: {name: null, message: null},
      }
    },
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
      },
      submitComment() {
      // Set a component data value for 'loading' to true, to be used in the UI
      this.loading = true
  	  // Axios supports the 'URLSearchParams' method for sending 'application/www-x-form-urlencoded' data
      let formData = new URLSearchParams();

      /* 'slug' is passed into the component as a prop.  Since the comments will
      	  be viewed through a post, the post is passing in its own url slug--
          something like 'my-new-post' or 'how-to-do-something'
      */
      formData.append('options[slug]', this.slug);

      // From our form input bindings
      formData.append('fields[name]', this.comment.name);
      formData.append('fields[message]', this.comment.message);

      // You will need to import axios for this-- or use your preferred library
      this.$axios.post('https://api.staticman.net/v2/entry/sammcoe/samuelcoe.com/master/comments', formData).then((response) => {
        this.loading = false;
      }).catch((err) => {
        console.log(err);
        this.loading = false;
      })
    }
    },
  }
</script>

<style>
  .titleBlock {
    margin-bottom: 14px;
  }

  .writtenAt, .updatedAt {
    font-style: italic;
    color: #888888;
  }

  .articleTitle {
    margin-bottom: 0px;
  }

  .contentsContainer {
    margin-top: 15px;
  }

  .tags {
    font-style: italic;
    color: #888888;
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
    color: #888888;
  }

  h1 {
    font-weight: bold;
    font-size: 36px;
  }
 .nuxt-content h2 {
    margin-top: 20px;
    font-weight: bold;
    font-size: 24px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }

  .imageContainer {
    padding-top: 30px;
    padding-bottom: 30px;
    width: 100%;
    text-align: center;
  }

  .imageContainer.titleImageContainer {
    padding-bottom: 0px;
  }

  .tocInnerLink {
    list-style: circle;
    margin-left: 20px;
  }

  .imageContainer > img {
    width: 100%;
    max-width: 100%;
    background-color: white;
  }

  .disclaimer {
    font-size: 12px;
    font-style: italic;
    color: #888888;
    line-height:0.5;
  }

  .titleImageCaption {
    font-size: 16px;
    font-style: italic;
    color: #888888;
    display: block;
  }

  img.small,
  .imageContainer > img.small {
    margin-left: auto;
    margin-right: auto;
    width: 35%;
    max-width: 35%;
  }

    img.medium,
  .imageContainer > img.medium {
    margin-left: auto;
    margin-right: auto;
    width: 55%;
    max-width: 55%;
  }

  img.medium,
  .imageContainer.titleImageContainer > img.medium {
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    max-width: 75%;
  }

    img.limitedMedium,
  .imageContainer.titleImageContainer > img.limitedMedium {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 500px;
  }

   img.limitedSmall,
  .imageContainer.titleImageContainer > img.limitedSmall {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 300px;
  }

  ul {
    margin-bottom: 15px;
  }

  ol {
    margin-bottom: 15px;
  }

  article {
    padding-bottom: 15px;
  }

</style>
