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
    text-decoration: var(--v-primary-base) dotted underline;
    text-decoration-thickness: 3px;
  }

  .tooltipText:hover {
    background-color: var(--v-tooltipTextHoverBackground-base);
  }
</style>