<template>
  <v-app>
    <v-app-bar
      color="#fffefb"
      app
    >
    
    <div class="titleContentContainer">
      <NuxtLink to="/" tag="span" style="cursor: pointer" class="mainTitleClass" 
        :class="this.$nuxt.$route.path == '/' ? 'selected' : 'unselected'">
        <v-toolbar-title v-text="title" />
      </NuxtLink>
            <NuxtLink to="/posts" tag="span" style="cursor: pointer" class="secondaryMenuClass"
            :class="this.$nuxt.$route.path == '/posts' ? 'selected' : 'unselected'">
        <v-toolbar-title v-text="'All Posts'" />
      </NuxtLink>
            <NuxtLink to="/about" tag="span" style="cursor: pointer" class="secondaryMenuClass"
            :class="this.$nuxt.$route.path == '/about' ? 'selected' : 'unselected'">
        <v-toolbar-title v-text="'About'" />
      </NuxtLink>
    </div>

    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Sometimes Meant'
    }
  }
}
</script>

<style>

.titleContentContainer {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  display: inherit;
}

.container:not(.ignoreMaxWidth) {
    max-width: 900px;
}

.mainTitleClass {
  font-weight: bold;
  color: #4a8183;
}

.selected.mainTitleClass,
.mainTitleClass:hover {
  border-bottom: 2px solid #4a8183;
}

.unselected {
  border-bottom: 2px solid transparent;
}

.selected.secondaryMenuClass,
.secondaryMenuClass:hover
{
  border-bottom: 2px solid #523a47;
}

.secondaryMenuClass {
  margin-left: 30px;
  color: #523a47;
}

.v-application code {
  background-color: #daf7ea;
  color: #437274;
}
</style>
