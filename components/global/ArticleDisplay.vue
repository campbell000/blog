<template>
  <article>
    <div class="titleBlock">
      <h1 class="articleTitle" v-html="article.title"></h1>
      <div class="metadata text--secondary">
        <div class="dates">
          <v-row align="center">
            <v-col cols="12" class="writtenAt">
              <span v-if="article.shouldShowUpdatedAt">Published: </span>
              <span>{{ formatDate(article.createdAt) }} </span>
              <span v-if="article.shouldShowUpdatedAt">
                <span class="dateDivider">|</span>
                Updated: {{ formatDate(article.updatedAt) }}
              </span>
            </v-col>
          </v-row>
          Tags:
          <span v-for="(tag, id) in article.tags" :key="id">
            <NuxtLink class="tag linkTag" v-if="tags[tag] != null" :to="`/posts/${tags[tag].slug}`">{{tags[tag].name}}</NuxtLink>
            <span v-if="tags[tag] == null" class="tag" v-text="tag"></span>
            <span class="tagDivider" v-if="id < article.tags.length - 1">  </span>
          </span>
          <div v-if="!article.shouldHideDonate" class="supportMe">
            <a target="_blank" href="https://www.buymeacoffee.com/acsimpledex"><img src="https://img.buymeacoffee.com/button-api/?text=Buy%20Me%20A%20Coffee &slug=acsimpledex&button_colour=4a8183&font_colour=ffffff&font_family=Lato&outline_colour=ffffff&coffee_colour=FFDD00"></a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="article.titleImage != null" class="imageContainer titleImageContainer" :class="article.containImage ? 'contain' : ''">
      <img  class="titleImage" :class="article.isSmallTitleImage ? 'small' : (article.isMediumTitleImage ? 'medium' : '')" :src="article.titleImage" :alt="article.titleImageAlt" />
      <span v-if='article.titleImageCaption != null' class="titleImageCaption text--secondary" v-text="article.titleImageCaption"></span>
      <span v-if='article.titleImageCaptionHTML != null' class="titleImageCaption text--secondary" v-html="article.titleImageCaptionHTML"></span>
    </div>
    
    <nav class="contentsContainer" v-if="article.shouldShowTableOfContents">
      <h2 class="contentsLabel">Contents:</h2>
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
        Comment Policy: no flamewars or trolling. Just have fun and be nice!
      </p>
      <p class="commentPolicy text--secondary">
        <a href="https://commentbox.io/privacy">Comment Privacy Policy</a>
      </p>
      <!-- Remarkbox - Your readers want to communicate with you -->
      <div id="comments" class="commentbox"></div>
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
        const date = new Date(dateStr);
        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
      
        return year + '-' + month + '-' + day;

      },
    },

    mounted() {
      if (this.article.isPasswordProtected) {
        var pass = prompt("Enter the password yo");
        this.passwordIsSatisfied = pass == "bigbuttsowhat";
      } else {
        this.passwordIsSatisfied = true;
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

  .dates {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.45;
    font-style: italic;
  }
  
  .dateDivider {
    padding-left: 8px;
    padding-right: 8px;
  }

  .summary {
    font-style: italic;
  }

  .updatedAt {
    text-align: right;
    align-self: normal;
  }

  .articleTitle {
    margin-bottom: 0px;
    margin-top: 10px;
    line-height: 1.25;
    font-weight: 500;
    font-size: 36px;
    padding-bottom: 8px;
  }

  .contentsContainer {
    padding: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-top: 10px;
    padding-bottom: 0px;
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom:15px;
    border: 1px dotted #e0e0e0;
    background-color: var(--v-infoboxBackground-base) !important;
    border-color:var(--v-infoBoxBorder-base) !important;
  }

  .spoiler {
    background-color: var(--v-textColor-base) !important;
    color: var(--v-textColor-base) !important;
  }

   .spoiler a {
    background-color: var(--v-textColor-base) !important;
    color: var(--v-textColor-base) !important;
  }

  .spoiler:hover {
    color: var(--v-background-base) !important;
  }

  .spoiler:hover a {
    color: var(--v-background-base) !important;
  }

  .contain {
    width: 100%;
    object-fit: contain;
  }

  .contain .titleImage {
    width: 100%;
    object-fit: contain;
    height: 350px;
  }




  .imageUnderSection {
    padding-top: 10px !important;
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

  h2:before, h3:before {
    content: "";
    display: block;
    height: 80px;
    margin: -80px 0 0;
  }

  .supportMe {
    margin-top: 10px;
  }

  .tagDivider {
    margin-left: 1px;
    margin-right: 1px;
  }

  h1 {
    font-weight: bold;
    font-size: 36px;
  }
  .nuxt-content h2{
    margin-top: 40px;
    font-weight: bold;
    line-height:1.5;
    margin-bottom: 8px;
  }

  .nuxt-content h3 {
    font-weight: 600;
    font-style: italic;
    margin-bottom: 2px;
    padding-top: 4px;
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
    padding-top: 0px;
    padding-bottom: 30px;
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

  .addendum {
    font-size: 14px;
    font-style: italic;
    line-height:1.4;
  }

  .disclaimers {
    font-size: 12px;
    font-style: italic;
    line-height:1;
  }

  .imageContainer .text--secondary {
    font-size: 16px;
    font-style: italic;
    display: block;
    line-height:1.5;
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
    margin-bottom: 20px;
  }

  .nuxt-content li {
    margin-bottom: 8px;
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
