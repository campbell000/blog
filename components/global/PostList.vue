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
    <div class="tagContainer">
      Tags: <span v-for="currTag of allTags" :key="currTag.name">
        <v-btn v-if="selectedTag != null && currTag.slug == selectedTag.slug" nuxt :to="`/posts/${currTag.slug}`" 
            class="ma-2 pressedTag" depressed small color="primary">{{currTag.name}}</v-btn>
        <v-btn v-if="selectedTag == null || currTag.slug != selectedTag.slug" nuxt :to="`/posts/${currTag.slug}`"
             class="ma-2" outlined small color="primary">{{currTag.name}}</v-btn>
      </span>

    </div>
    <ul class="listContainer" style='list-style: none'>
      <li class="articleListItem" v-for="article of articles" :key="article.slug">
          <div>
            <NuxtLink :to="{ name: 'slug', params: { slug: article.slug } }"><h2>{{ article.title }}</h2></NuxtLink>
            <div class='postDate'>{{formatDate(article.createdAt)}}</div>
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
  }
</style>