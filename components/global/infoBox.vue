<script>
  export default {
    props: {
      sourceName: {
        type: String,
        default: () => null
      },
      sourceLink: {
        type: String,
        default: () => null
      },
    }
  }
</script>

<template>
  <v-sheet color="infoboxBackground" class="rounded-xl infoBoxText primary--text">
    <div class="bigQuote left">“</div>
    <slot name="info-box">default</slot>
    <div class="bigQuote right">”</div>
    <div class="source">
      -- <a :href="sourceLink" target="_blank">{{sourceName}}</a>
    </div>
  </v-sheet>
</template>

<style scoped>
  .infoBoxText {
    padding: 30px;
    font-size: 20px;
    font-style: italic;
  }

  p {
    padding: 0px;
    margin: 0px;
  }

  .bigQuote {
    font-size: 38px;
    line-height:0;
    margin-right: -3px;
  }

  .bigQuote.left {
    display: inline;
  }

  .bigQuote.right {
    display: inline;
    margin-left: -10px;
  }


  .source {
    text-align: right;
  }
</style>