<template>
<v-container class="mb-2">
  <v-row>
    <v-col :lg="6" class="nextPrevLink next">
            <NuxtLink
        v-if="prev"
        :to="{ name: 'slug', params: { slug: prev.slug } }"
        >
        Earlier Post: {{ prev.title }}
      </NuxtLink>
    </v-col>
    <v-col :lg="6" class="nextPrevLink previous">
            <NuxtLink
        v-if="next"
        :to="{ name: 'slug', params: { slug: next.slug } }"
      >
                  
        Next Post: {{ next.title }}
      </NuxtLink>
    </v-col>
  </v-row>
</v-container>
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

