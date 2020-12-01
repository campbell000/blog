<script>
  export default {
    props: {
      height: {
        type: Number,
        default: () => null
      },
      width: {
        type: Number,
        default: () => null
      },
      srcLink: {
        type: String,
        default: () => null
      },
    }
  }
</script>

<template>
  <div :width="width" :height="height" class="vidContainer">
    <iframe :width="width" :height="height" :src="srcLink" 
    frameborder="0" allow="accelerometer; encrypted-media; gyroscope;" allowfullscreen></iframe>
    <div class="text--secondary vidCaption"><slot></slot></div>
  </div>
</template>

<style scoped>
  .vidContainer {
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 30px;
  }

  .vidCaption {
    text-align: center;
    font-size: 16px;
    font-style: italic;
    display: block;
    line-height: 1.5;
  }
</style>