<template>
  <article>
    <NuxtLink class="notalink" :to="{ name: 'slug', params: { slug: article.slug } }">
      <div class="container">
        <div class="previewImageContainer">
          <img class="image" :src="article.titleImage" />
        </div>
        <div class="titleTagContainer">
          <div class="title previewTitle" v-html="article.title"></div>
          <div class="postListDate">{{ formatDate(article.createdAt) }}</div>
          <div class="tags">
            {{ article.tags.join(", ") }}
          </div>
        </div>
      </div>
    </NuxtLink>

  </article>
</template>
  
<script>
export default {
  data() {
    return {
      commentBoxId: process.env.NODE_ENV == "development" ? "5674511043133440-proj" : "5701338281279488-proj",
      passwordIsSatisfied: false
    }
  },
  props: {
    article: {
      type: Object,
      default: () => null
    }
  },
  methods: {
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
  
<style scoped>
.notalink {
  text-decoration: none;
}

.postListDate {
  font-style: italic;
    font-weight: lighter;
}

.image {
  max-width: 250px;
  max-height: 140.625px;
  object-fit: cover;
  border: 1px solid var(--v-anchor-base);
  flex-grow: 0;
  flex-shrink: 0;
  aspect-ratio: 16 / 9;
  width: 100%;
    margin-top: 7px;
    float: right;
}

.container {
  display: flex;
  cursor: pointer;
}

.previewImageContainer {
  width: 40%;
}

.container:hover {
  opacity: 0.8;
}

.titleTagContainer {
  margin-left: 16px;
  width: 70%;
}

@media(max-width: 600px) {
  .titleTagContainer {
    width: 70%;
    line-height: 1.5em;
    font-size: 0.9rem;
  }

  .title.previewTitle {
    line-height: 1.4em;
    font-size: 0.9rem !important;
  }
  .image {
    margin-top: 4px;
  }

}


.tags {
  color: var(--v-anchor-base);
  font-weight: lighter;
}

.title {
  font-weight: bold;
  color: var(--v-anchor-base);
}
</style>
  