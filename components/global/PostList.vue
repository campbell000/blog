<script>
  export default {
    props: {
      articles: {
        type: Array,
        default: () => null
      },
      allTags: {
        type: Array,
        default: () => null
      },
      selectedTag: {
        type: Object,
        default: () => null
      }
    },

    mounted() {
      document.getElementById("allButton").classList.remove('v-btn--active');
    },

    methods:{
      formatDate(dateStr) {
        var date = new Date(dateStr);
        var d = date.getDate();
        var m = date.getMonth() + 1; //Month from 0 to 11
        var y = date.getFullYear();
        return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
      },
    }
  }
</script>

<template>
  <div>
    <div class="tagContainer">
      <v-row justify="start">
        <v-btn id="allButton" v-if="selectedTag == null" nuxt :to="`/posts`" 
              class="ma-2 pressedTag" depressed small color="primary" >All</v-btn>
        <v-btn id="allButton" v-if="selectedTag != null" nuxt :to="`/posts`"
              class="ma-2" outlined small color="primary" >All</v-btn>
        <template v-for="currTag of allTags">
          <v-btn v-if="selectedTag != null && currTag.slug == selectedTag.slug" nuxt :to="`/posts/${currTag.slug}`" 
              class="ma-2 pressedTag" depressed small color="primary" :key="currTag.name">{{currTag.name}}</v-btn>
          <v-btn v-if="selectedTag == null || currTag.slug != selectedTag.slug" nuxt :to="`/posts/${currTag.slug}`"
              class="ma-2" outlined small color="primary" :key="currTag.name">{{currTag.name}}</v-btn>
        </template>
      </v-row>
    </div>
    <ul class="listContainer" style='list-style: none'>
      <li class="articleListItem" v-for="article of articles" :key="article.slug">
          <div>
            <NuxtLink :to="{ name: 'slug', params: { slug: article.slug } }">
              <h2>{{ article.title }}</h2>
            </NuxtLink>
            <div class='postDate'>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon  v-bind="attrs" v-on="on" v-if="article.isPasswordProtected">mdi-lock</v-icon>
                </template>
                <span>Article is password-protected. Will be available soon.</span>
              </v-tooltip>
              
              {{formatDate(article.createdAt)}}
            </div>
            <div class="postSummary">{{ article.summary }}</div>
          </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  div.tagContainer {
    padding-top: 7px;
    padding-bottom: 15px;
  }

  .pressedTag {
      color: white !important;
  }

  .postDate {
    font-style: italic;
    color: #777777;
  }

  .articleListItem {
    margin-bottom: 30px;
  }
  
  .listContainer {
    margin-bottom: 130px;
    list-style-type: none;
  }
</style>