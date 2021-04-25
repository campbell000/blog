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
    <v-chip-group class="tagContainer" :multiple="false"
    active-class="primary--text" column>
      <v-chip  :id="'AllTag'" nuxt link :to="`/posts/all`">
        All
      </v-chip>
      <template v-for="currTag of allTags">
        <v-chip :id="currTag.name+'Tag'" :key="currTag.name" :value="currTag.name" nuxt link :to="`/posts/${currTag.slug}`">
          {{ currTag.name }}
        </v-chip>
      </template>
    </v-chip-group>
    <ul class="listContainer" style='list-style: none'>
      <li class="articleListItem" v-for="article of articles" :key="article.slug">
          <div>
            <NuxtLink :to="{ name: 'slug', params: { slug: article.slug } }">
              <h2 class="postListArticleTitle" v-html="article.title"></h2>
            </NuxtLink>
            <div class='postDate text--secondary'>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon  v-bind="attrs" v-on="on" v-if="article.isPasswordProtected">mdi-lock</v-icon>
                </template>
                <span>Article is password-protected. Will be available soon.</span>
              </v-tooltip>
              <div class="postListDate">{{formatDate(article.createdAt)}}</div>
            </div>
            <div class="postSummary">{{ article.summary }}</div>
          </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .tagContainer {
    margin-bottom:10px;
  }

  .pressedTag {
      color: white !important;
  }

  .postSummary {
    font-size: 15px;
  }

  .postDate {
    font-style: italic;
    line-height: 1.5;
    font-size: 16px;
  }

  .postListArticleTitle {
    padding-bottom: 0px;
    line-height: 1.4;
  }  

  .articleListItem {
    margin-bottom: 30px;
  }
  
  .listContainer {
    margin-bottom: 130px;
    list-style-type: none;
    padding-left: 0px;
  }

  .tag {
    margin-left: 0px !important;
  }

  .filterBy {
    line-height: 1;
    font-weight: 300;
    font-style: italic;

  }

  .filterContainer {
    padding: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-width: 1px;
    border-style: solid;
    background-color: var(--v-infoboxBackground-base) !important;
    border-color:var(--v-infoBoxBorder-base) !important;
    margin-bottom: 15px;
  }
</style>