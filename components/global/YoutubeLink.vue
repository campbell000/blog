<script>
  export default {
    props: {
      srcLink: {
        type: String,
        default: () => null
      },
    }
  }
</script>

<template>
  <div class="wrapper">
    <div :width="width" :height="height" class="vidContainer">
      <iframe :src="srcLink" 
      frameborder="0" allow="accelerometer; encrypted-media; gyroscope;" allowfullscreen></iframe>
    </div>
    <div class="text--secondary vidCaption"><slot></slot></div>
  </div>

</template>

<style scoped>
  .wrapper {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .vidContainer {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    
  }

  .vidCaption {
    margin-top: 5px;
    text-align: center;
    font-size: 16px;
    font-style: italic;
    display: block;
    line-height: 1.5;
  }

  .vidContainer { 
    position: relative; 
    padding-bottom: 56.25%; 
    height: 0; 
    overflow: hidden; 
    max-width: 100%; 
  } 
  
  
  .vidContainer iframe, .vidContainer object, .vidContainer embed { 
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
  }
</style>