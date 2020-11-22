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
  <v-sheet color="infoboxBackground" class="rounded-xl infoBoxContainer infoBoxText--text">
    <div class="bigQuote left primary--text">“</div>
    <slot>default</slot>
    <div class="bigQuote right primary--text">”</div>
    <div class="source">
      <a class="sourceLink" :href="sourceLink" target="_blank">{{sourceName}}</a>
    </div>
  </v-sheet>
</template>

<style scoped>
  .infoBoxContainer {
    padding: 30px;
    padding-bottom: 10px;
    font-size: 20px;
    font-style: italic;
    margin-bottom: 20px;
  }

  p {
    padding: 0px;
    margin: 0px;
  }

  .bigQuote {
    font-size: 35px;
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
    text-decoration: none;
    line-height: 1.5;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .sourceLink {
    text-decoration: none;
  }

  .sourceLink:hover {
    text-decoration: underline;
  }
</style>