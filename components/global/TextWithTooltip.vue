<script>
import 'floating-vue/dist/style.css'
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
<no-ssr>
<v-tooltipp class="tooltipwrapper">
  <span class="text"><slot></slot></span>
  <template #popper>{{tooltip}}</template>
</v-tooltipp>
</no-ssr>
</template>

<style>
  .text {
    border-bottom: 2.5px dotted var(--v-primary-base);
    padding-bottom: 2px;
    white-space: nowrap;
  }

  .text:hover {
    background-color: var(--v-tooltipTextHoverBackground-base);
  }

  .tooltipwrapper{
    display: inline;
  }

  .v-popper__popper {
    font-family: Karla, sans-serif !important;
    max-width: 400px;
  }

  .v-popper__inner {
        background-color: var(--v-tooltipBackgroundColor-base) !important;
    color: var(--v-textColor-base) !important;
    line-height: 1.5em !important;
        border: 1px solid var(--v-primary-base) !important;
    font-size: 14px !important;
  }

  .v-popper__arrow-inner, .v-popper__arrow-outer {
    background-color: var(--v-tooltipBackgroundColor-base) !important;
    color: var(--v-textColor-base) !important;
    border-color: var(--v-primary-base) !important;
  }


</style>