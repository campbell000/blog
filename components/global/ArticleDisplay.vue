<template>
  <article>
    <div class="titleBlock" >
      <h1 class="articleTitle">{{ inList ? '' : '' }}{{ article.title }}</h1>
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
    
    <nuxt-content v-if="passwordIsSatisfied" :document="article" />
    <p v-if="!passwordIsSatisfied">Sorry, you need to enter the password correctly to view this article</p>
    <prev-next v-if="!inList" :prev="prev" :next="next" />
    <br />
    <v-divider/>
    <br />
    <h3>
      <span class="commentHeader">Comments</span>
      <v-tooltip top>
      <template v-slot:activator="{ on, attrs }"><v-icon medium v-bind="attrs" v-on="on">mdi-information-outline</v-icon>
      </template>
      <span>Real Emails aren't required unless you<br /> want your name to be displayed</span>
      </v-tooltip>
    </h3>
    <p class="commentPolicy text--secondary">
      Comment Policy: all opinions are welcome, even if you disagree with the author. Off topic comments are also allowed,
      as long as they are loosely related to the topic of the post or to this website in general.
      But any personal attacks on the author or other commenters will be deleted without warning.
      Comments without any meaning whatsoever (i.e. trolling, spam, etc) will also be deleted without warning.

      Have fun and be nice!

    </p>
    <!-- Remarkbox - Your readers want to communicate with you -->
    <div id="remarkbox-div"></div>
  </article>
</template>

<script>
  export default {
    data () {
      return {
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
    },

    mounted() {
      if (this.article.isPasswordProtected) {
        var pass = prompt("Enter the password yo");
        this.passwordIsSatisfied = pass == "bigbuttsowhat";
      } else {
        this.passwordIsSatisfied = true;
      }
      var rb_owner_key = "af501970-328e-11eb-8abd-040140774501";
      var thread_uri = window.location.href;
      if (thread_uri.endsWith("/")) {
        thread_uri = thread_uri.substring(0, thread_uri.length - 1);
      }
      var thread_title = window.document.title;
      var thread_fragment = window.location.hash;

      // rb owner was here.
      var rb_src = "https://my.remarkbox.com/embed" + 
          "?rb_owner_key=" + rb_owner_key +
          "&thread_title=" + encodeURI(thread_title) +
          "&thread_uri=" + encodeURIComponent(thread_uri) + 
          thread_fragment;

      function create_remarkbox_iframe() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("id", "remarkbox-iframe");
        ifrm.setAttribute("scrolling", "no");
        ifrm.setAttribute("src", rb_src);
        ifrm.setAttribute("frameborder", "0");
        ifrm.setAttribute("tabindex", "0");
        ifrm.setAttribute("title", "Remarkbox");
        ifrm.style.width = "100%";
        document.getElementById("remarkbox-div").appendChild(ifrm);
      }
      if (this.passwordIsSatisfied) {
        create_remarkbox_iframe();
        iFrameResize(
          {
            checkOrigin: ["https://my.remarkbox.com"],
            inPageLinks: true,
            initCallback: function(e) {e.iFrameResizer.moveToAnchor(thread_fragment)}
          },
          document.getElementById("remarkbox-iframe")
        );
      }
    }
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
    margin-top: 15px;
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
