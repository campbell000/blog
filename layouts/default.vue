<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
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
    <v-app-bar-nav-icon v-if="isMobile()" @click.stop="drawer = !drawer" />
    <div class="titleContentContainer">
      <NuxtLink to="/" tag="span" style="cursor: pointer" class="mainTitleClass" 
        :class="[this.$nuxt.$route.path == '/' ? 'selected' : 'unselected',
          this.$vuetify.theme.dark ? 'isDark' : '']">
        <v-toolbar-title v-text="title" />
      </NuxtLink>
      <NuxtLink v-if="!isMobile()" to="/posts" tag="span" style="cursor: pointer" class="secondaryMenuClass"
            :class="[this.$nuxt.$route.path == '/posts' ? 'selected' : 'unselected',
              this.$vuetify.theme.dark ? 'isDark' : '']">
        <v-toolbar-title v-text="'All Posts'" />
      </NuxtLink>
      <NuxtLink v-if="!isMobile()" to="/about" tag="span" style="cursor: pointer" class="secondaryMenuClass"
            :class="[this.$nuxt.$route.path == '/about' ? 'selected' : 'unselected',
              this.$vuetify.theme.dark ? 'isDark' : '']">
        <v-toolbar-title v-text="'About'" />
      </NuxtLink>
      <v-btn class='titleIcon' text icon @click="darkMode()"><v-icon>mdi-brightness-4</v-icon></v-btn>
    </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
          <v-footer
      class="font-weight-medium"
    >
      <v-col
        cols="12"
      >
      <a href="https://www.buymeacoffee.com/acsimpledex">
        <img src="https://img.buymeacoffee.com/button-api/?text=Support this site&emoji=💻&slug=acsimpledex&button_colour=FF5F5F&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00">
      </a>
      <br />
      Questions or Comments? <a href="mailto:ac.simpledex@gmail.com">Let me know</a>
      </v-col>
    </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Never Meant',
      isDark: this.$vuetify.theme.dark,
      drawer: false,
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
  methods : {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    }
  }
}
</script>

<style>

.titleContentContainer {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  overflow-x: hidden;
  display: inherit;
}

.container:not(.ignoreMaxWidth) {
    max-width: 700px;
    overflow-x: hidden;
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
  border-bottom: 2px solid #997e8c;
}

.secondaryMenuClass.isDark {
  color: #997e8c;
}

.titleIcon {
height: 24px !important;
margin-top: 4px;
margin-left: 15px;
}

:not(pre) > .v-application code {
  background-color: #daf7ea;
  color: #437274;
}

pre.language-text.line-numbers {
  background-color: #daf7ea;
  color: #437274;
}

html {
  overflow-x: hidden;
  width: 100%;
}

pre > code {
  padding-left: 0px !important;
}
</style>
