<template>
  <v-app>
    <v-navigation-drawer
      :clipped=true
      v-model="drawer"
      temporary
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      dense
      app
    >
    <v-app-bar-nav-icon class="appBarIcon" @click.stop="drawer = !drawer" />
    <div class="titleContentContainer">
      <NuxtLink to="/" tag="span" style="cursor: pointer" class="mainTitleClass" 
        :class="[this.currentPath == '/' ? 'selected' : 'unselected',
          this.$vuetify.theme.dark ? 'isDark' : '']">
        <v-toolbar-title v-text="title" />
      </NuxtLink>
      <div class="nonMobileContent">
        <NuxtLink to="/posts" tag="span" style="cursor: pointer" class="secondaryMenuClass"
            :class="[this.currentPath.startsWith('/posts') ? 'selected' : 'unselected',
              this.$vuetify.theme.dark ? 'isDark' : '']">
        <v-toolbar-title v-text="'All Posts'" />
      </NuxtLink>
      <NuxtLink to="/about" tag="span" style="cursor: pointer" class="secondaryMenuClass"
            :class="[this.currentPath.startsWith('/about') ? 'selected' : 'unselected',
              this.$vuetify.theme.dark ? 'isDark' : '']">
        <v-toolbar-title v-text="'About'" />
      </NuxtLink>
      </div>

      <v-btn class='titleIcon' text icon @click="darkMode()"><v-icon>mdi-brightness-4</v-icon></v-btn>
    </div>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :outlined="true" class="siteFooter font-weight-medium" :absolute="isMobile" app>
        <div class="footerContent">
          <v-row  align="center">
            <v-col cols="4">
              Never Meant - {{ new Date().getFullYear() }}  
            </v-col>
            <v-col cols="8" style="text-align: right; width: 100%">
<a href="https://www.buymeacoffee.com/acsimpledex"><img src="https://img.buymeacoffee.com/button-api/?text=Support Never Meant &emoji=💻&slug=acsimpledex&button_colour=4a8183&font_colour=ffffff&font_family=Inter&outline_colour=ffffff&coffee_colour=FFDD00"></a>
            </v-col>
          </v-row>
        </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      currentPath: this.$nuxt.$route.path,
      title: 'Never Meant',
      isDark: this.$vuetify.theme.dark,
      drawer: false,
      isMobile: true,
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'All Posts',
          to: '/posts'
        },
        {
          title: 'About',
          to: '/about'
        }
      ],
    }
  },

  beforeDestroy () {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.onResize, { passive: true })
  },

  mounted() {
    this.currentPath = this.$nuxt.$route.path;
    window.addEventListener('resize', this.onResize, { passive: true })
    this.onResize();
    if (window) {
      window.history.scrollRestoration = 'auto';
    }
  },

  watch:{
    $route (to, from){
        this.currentPath = to.path;
    }
  },

  methods : {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },

    onResize () {
      this.isMobile = window.innerWidth < 500 ||  window.innerHeight < 500;
    },
  }
}
</script>

<style>
.v-application {
  line-height:1.8 !important;
}

.titleContentContainer {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  overflow-x: hidden;
  display: inherit;
}

.siteFooter {
  width: 100%;
}

.questionsBlock {
  line-height: 1.3;
}

.footerContent {
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  width: 100%;
  font-size: 13px;
}


.footerContent > .row > .col {
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 1px;
  padding-bottom: 1px;
}

.nonMobileContent {
  display: inherit;
}

@media(min-width: 501px) {
  .nonMobileContent {
    display: inherit;
  }

  .appBarIcon {
    display: none !important;
  }
}

@media(max-width: 500px) {
  .nonMobileContent {
    display: none;
  }

  .appBarIcon {
    display:inherit;
  }
}


.container:not(.ignoreMaxWidth) {
    max-width: 700px;
    overflow-x: hidden;
}

.appBarIcon {
  margin-right: 5px;
}

.v-list-item__action {
  margin-right: 0px !important;
}

.v-navigation-drawer {
  width: 190px !important;
}

.mainTitleClass {
  font-weight: bold;
  color: #4a8183;
}

.selected.mainTitleClass,
.mainTitleClass:hover {
  border-bottom: 2px solid #4a8183;
}

.mainTitleClass.isDark {
  color: #7fc3b0;
}

.selected.mainTitleClass.isDark,
.mainTitleClass.isDark:hover {
  box-sizing: border-box;
  border-bottom: 2px solid #7fc3b0;
}

.unselected {
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
}

.selected.secondaryMenuClass,
.secondaryMenuClass:hover
{
  box-sizing: border-box;
  border-bottom: 2px solid #523a47;
}

.secondaryMenuClass {
  margin-left: 30px;
  color: #523a47;
}

.selected.secondaryMenuClass.isDark,
.secondaryMenuClass.isDark:hover
{
  border-bottom: 2px solid #ac8d9d;
}

.secondaryMenuClass.isDark {
  color: #ac8d9d;
}

a[href^="https://www.buymeacoffee.com/acsimpledex"] > img {
  height: 38px;
}

a[href^="https://www.buymeacoffee.com/acsimpledex"] {
  line-height: 0;
  height: 38px;
}

.titleIcon {
height: 24px !important;
margin-top: 4px;
margin-left: 15px;
}

:not(pre) > .v-application code {
  background-color: #daf7ea;
  color: #233d3e;
  text-shadow: 0 0px white !important;
}

code {
  text-shadow: 0 0px white !important;
}

pre.language-text.line-numbers {
  background-color: #daf7ea;
  color: #233d3e;
}

html {
  overflow-x: hidden;
  width: 100%;
}

.nuxt-content-highlight {
  margin-bottom: 20px;
}

pre > code {
  padding-left: 0px !important;
}
</style>
