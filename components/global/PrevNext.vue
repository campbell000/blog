<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'slug', params: { slug: prev.slug } }"
      class="nextPrevLink previous">
      Later Article: {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'slug', params: { slug: next.slug } }"
      class="nextPrevLink next"
    >
      Earlier Article: {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>

<style scoped>

.nextPrevLink.next {
  float: left;
}

.nextPrevLink.previous {
  float: right;
}


</style>

