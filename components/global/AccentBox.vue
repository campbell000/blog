<script>
  export default {
  }
</script>

<template>
  <v-sheet class="rounded infoBoxContainer infoBoxText--text">
    <slot>default</slot>
  </v-sheet>
</template>

<style>
  .infoBoxContainer {
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 17px;
    border-width: 1px;
    border-style: solid;
    background-color: var(--v-infoboxBackground-base) !important;
    border-color:var(--v-infoBoxBorder-base) !important;
  }

  .infoBoxContainer.p {
    padding: 0px;
    margin: 0px;
  }
</style>