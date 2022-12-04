<script>
  export default {
    props: {
      text: {
        type: String,
        default: () => null
      },
      tooltip: {
        type: String,
        default: () => null
      },
    }
  }
</script>

<template>
  <v-tooltip top>
  <template v-slot:activator="{ on, attrs }">
    <span class="tooltipText" v-bind="attrs" v-on="on"><slot></slot></span>
  </template>
  <span>{{tooltip}}</span>
  </v-tooltip>
</template>

<style>
  .tooltipText {
    border-bottom: 2px dashed var(--v-primary-base);
    padding-bottom: 2px;
    white-space: nowrap;
  }

  .tooltipText:hover {
    background-color: var(--v-tooltipTextHoverBackground-base);
  }

  .v-tooltip__content {
    /* Fixes  tooltips not appearing in right spot on mobile */
    max-width: 315px !important;
  }
</style>