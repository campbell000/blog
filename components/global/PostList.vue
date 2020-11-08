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
            class="ma-2 pressedTag" depressed small color="#437274">{{currTag.name}}</v-btn>
        <v-btn v-if="selectedTag == null || currTag.slug != selectedTag.slug" nuxt :to="`/posts/${currTag.slug}`"
             class="ma-2" outlined small color="#437274">{{currTag.name}}</v-btn>
      </span>

    </div>
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

<style scoped>
  div.tagContainer {
    padding-top: 7px;
    padding-bottom: 15px;
  }

  .pressedTag {
      color: white !important;
    }
</style>