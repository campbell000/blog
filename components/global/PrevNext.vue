<template>
  <v-row>
    <v-col :lg="6" class="nextPrevLink next">
            <NuxtLink
        v-if="prev"
        :to="{ name: 'slug', params: { slug: prev.slug } }"
        >
        Earlier Post: <span v-html="prev.title"></span>
      </NuxtLink>
    </v-col>
    <v-col :lg="6" class="nextPrevLink previous">
            <NuxtLink
        v-if="next"
        :to="{ name: 'slug', params: { slug: next.slug } }"
      >
                  
        Next Post: <span v-html="next.title"></span>
      </NuxtLink>
    </v-col>
  </v-row>
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
}

.nextPrevLink.previous {
}


</style>

