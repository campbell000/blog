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
      quotes: {
        type: Boolean,
        default: () => true
      }
    }
  }
</script>

<template>
  <v-sheet class="rounded infoBoxContainer infoBoxText--text">
    <div v-if="quotes" class="bigQuote left primary--text">“</div>
    <slot>default</slot>
    <div v-if="quotes" class="bigQuote right primary--text">”</div>
    <div class="source">
      <a class="sourceLink" :href="sourceLink" target="_blank">{{sourceName}}</a>
    </div>
  </v-sheet>
</template>

<style scoped>
  .infoBoxContainer {
    padding: 25px;
    padding-top: 20px;
    padding-bottom: 0px;
    font-size: 18px;
    font-style: italic;
    margin-bottom: 20px;
    border-width: 1px;
    border-style: dotted;
    background-color: var(--v-infoboxBackground-base) !important;
    border-color:var(--v-infoBoxBorder-base) !important;
  }

  p {
    padding: 0px;
    margin: 0px;
  }

  .bigQuote {
    font-size: 28px;
    line-height:0;
    margin-right: -3px;
  }

  .bigQuote.left {
    display: inline;
    margin-left: -10px;
  }

  .bigQuote.right {
    display: inline;
    margin-left: -10px;
  }


  .source {
    text-align: right;
    text-decoration: none;
    line-height: 1.5;
    padding-top: 5px;
    padding-bottom: 10px;
  }

  .sourceLink {
    text-decoration: none;
  }

  .sourceLink:hover {
    text-decoration: underline;
  }
</style>