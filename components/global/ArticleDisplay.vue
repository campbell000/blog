<template>
  <article>
    <div class="titleBlock" >
      <h1 class="articleTitle">{{ article.title }}</h1>
      <div class="metadata text--secondary">
        <div class="writtenAt">Written At: {{ formatDate(article.createdAt) }}</div>
        <div class="updatedAty" v-if="article.shouldShowUpdatedAt">Last updated: {{ formatDate(article.updatedAt) }}</div>
        <div class="tags">Tags:
          <span v-for="(tag, id) in article.tags" :key="id">
            <NuxtLink class="tag linkTag" v-if="tags[tag] != null" :to="`/posts/${tags[tag].slug}`">{{tags[tag].name}}</NuxtLink>
            <span v-if="tags[tag] == null" class="tag" v-text="tag"></span>
            <span class="tagDivider" v-if="id < article.tags.length - 1"> | </span>
          </span>
          <div class="supportMe">
            <a target="_blank" href="https://www.buymeacoffee.com/acsimpledex"><img src="https://img.buymeacoffee.com/button-api/?text=Support This Site &emoji=💻&slug=acsimpledex&button_colour=4a8183&font_colour=ffffff&font_family=Inter&outline_colour=ffffff&coffee_colour=FFDD00"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="metadata text--secondary">
      <div class="summary">{{ article.summary }}</div>
    </div>

    <div v-if="article.titleImage != null" class="imageContainer titleImageContainer">
      <img  class="titleImage" :class="article.isSmallTitleImage ? 'small' : (article.isMediumTitleImage ? 'medium' : '')" :src="article.titleImage" :alt="article.titleImageAlt" />
      <span v-if='article.titleImageCaption != null' class="titleImageCaption text--secondary" v-text="article.titleImageCaption"></span>
      <span v-if='article.titleImageCaptionHTML != null' class="titleImageCaption text--secondary" v-html="article.titleImageCaptionHTML"></span>
    </div>
    
    <nav class="contentsContainer" v-if="article.shouldShowTableOfContents">
      <h2 class="contentsLabel">Contents</h2>
      <ul>
        <li v-for="link of article.toc" :key="link.id" :class="link.depth == 2 ? 'tocLink' : 'tocInnerLink'">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    
    <nuxt-content  :document="article" />
    <prev-next v-if="!isOnFrontPage" :prev="prev" :next="next" />
    <br />
    <v-divider/>
    <br />
    <div v-if="!isOnFrontPage">
      <p class="commentPolicy text--secondary">
        Comment Policy: all opinions are welcome, even if you disagree with the author. Off topic comments are also allowed,
        as long as they are loosely related to the topic of the post or to this website in general.
        But any personal attacks on the author or other commenters will be deleted without warning.
        Comments without any meaning whatsoever (i.e. trolling, spam, etc) will also be deleted without warning.

        Have fun and be nice!
      </p>
      <p class="commentPolicy text--secondary">
        <a href="https://commentbox.io/privacy">Here's the privacy policy of the comment provider that I use</a>
      </p>
      <!-- Remarkbox - Your readers want to communicate with you -->
      <div  class="commentbox"></div>
    </div>
  </article>
</template>

<script>
  export default {
    data () {
      return {
        commentBoxId: process.env.NODE_ENV == "development" ? "5674511043133440-proj" : "5701338281279488-proj",
        passwordIsSatisfied: false
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
      isOnFrontPage: {
        type: Boolean,
        default: () => false
      },
    },
    methods:{
      formatDate(dateStr) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateStr).toLocaleDateString('en', options)
      },
    },

    mounted() {
      if (this.article.isPasswordProtected) {
        var pass = prompt("Enter the password yo");
        this.passwordIsSatisfied = pass == "bigbuttsowhat";
      } else {
        this.passwordIsSatisfied = true;
      }
      var thread_uri = window.location.href;
      if (thread_uri.endsWith("/")) {
        thread_uri = thread_uri.substring(0, thread_uri.length - 1);
      }

      if (!this.isOnFrontPage) {
        commentBox(this.commentBoxId, {
          className: 'commentbox',
          backgroundColor: 'white'
        });
      }
    },
  }
</script>

<style>
  .titleBlock {
    margin-bottom: 14px;
  }

  .contentsLabel {
    font-weight: 500;
  }

  .writtenAt, .updatedAt {
    font-style: italic;
  }

  .articleTitle {
    margin-bottom: 0px;
  }

  .contentsContainer {
    padding: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    margin-top: 15px;
  }

  .theme--light .contentsContainer {
    background-color: #f7f7f7;
    border: 0.5px solid #e0e0e0;
  }

  .theme--dark .contentsContainer {
    background-color: #222;
    border: 0.5px solid #2d2d2d;
  }

  .tags {
    font-style: italic;
  }

  .tag {
    padding-left: 2px;
    padding-right: 2px;
  }

  a[href^="https://www.buymeacoffee.com/acsimpledex"] > img {
  height: 43px;
  }

  a[href^="https://www.buymeacoffee.com/acsimpledex"] {
    line-height: 0;
    height: 43px;
  }

  .supportMe {
    margin-top: 10px;
  }

  .tagDivider {
    margin-left: 1px;
    margin-right: 1px;
  }

  .articleTitle {
    line-height: 1.5 !important;
  }

  h1 {
    font-weight: bold;
    font-size: 36px;
  }
 .nuxt-content h2 {
    margin-top: 40px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  .nuxt-content h3 {
    font-weight: 500;
    text-decoration: underline;
    font-style: italic;
    margin-bottom: 5px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }

  .commentPolicy {
    font-size: 12px;
    font-style: italic;;
  }

  .commentHeader {
    vertical-align: middle;
    padding-right: 5px;
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

  .nuxt-content p + ul {
    margin-top: -10px;
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
    line-height:0.5;
  }

  .titleImageCaption {
    font-size: 16px;
    font-style: italic;
    display: block;
    line-height:1.5;
  }

  img.small,
  .imageContainer > img.small {
    margin-left: auto;
    margin-right: auto;
    width: 35%;
    max-width: 35%;
  }

  img,
  .imageContainer > img {
    max-width: 700px;
    
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

  li > ul {
    margin-bottom: 5px;
  }

  ol {
    margin-bottom: 15px;
  }

  article {
    padding-bottom: 15px;
  }

</style>
