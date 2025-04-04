<script>
  export default {
    props: {
        data: {
            type: Array,
            default: () => []
        },
        auxData: {
            type: Object,
            default: null
        },
        title: {
            type: String
        },
        scoreName: {
            type: String
        },
        description: {
            type: String
        },
        profileData: {
            type: Object,
            default: {}
        }
    },

    mounted() {
        if (this.title == "We Miss You") {
            const thizz = this;
            this.data.sort(function(a, b) {
                const gamerTagA = a.name;
                const gamerTagB = b.name;
                console.log(thizz.auxData[gamerTagA]);
                if (thizz.auxData[gamerTagA] < thizz.auxData[gamerTagB]) return -1;
                if (thizz.auxData[gamerTagA] > thizz.auxData[gamerTagB]) return 1;
                return 0;
            });
        }
    },

    methods:{
      getMedalColor(index) {
        if (index == 0) {
            return "yellow";
        } else if (index == 1) {
            return "silver";
        } else if (index == 2) {
            return "orange";
        }
        else {
            return "transparent"; 
        }
      },

      getDataToShow() {
        if (this.expanded) {
            return this.data;
        } else {
            return this.data.slice(0, 3);
        }
      }
    },

    data() {
        return {
            expanded: false,
        }
    },
  }
</script>

<template>
  <div>
    <h3 class="tableTitle">
    {{ title }}
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          color="primary"
          v-bind="attrs"
          v-on="on">
          mdi-information-outline
        </v-icon>
      </template>
      <span>{{ description }}</span>
    </v-tooltip>
    </h3>
    <v-simple-table dense>
        <template v-slot:default>
            <thead>
                <tr>
                <th class="tableHeader">
                    Gamer
                </th>
                <th class="tableHeader">
                    {{scoreName}} 
                </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(datum, index) in getDataToShow() " :key="datum.name">
                <td class="gamerCell">    
                    <v-icon :color="getMedalColor(index)">mdi-circle-medium</v-icon>
                    <img class="banner" :src="profileData[datum.name]"/>
                </td>

                <td>{{ auxData != null && title == "We Miss You" ? auxData[datum.name] : datum.value }}</td>
                </tr>
            </tbody>
            
        </template>
    </v-simple-table>
    <a v-if="!expanded" class="expandLink" @click="expanded = true">+ Show All Results</a>
  </div>
</template>

<style >
    .tableTitle {
        font-style: normal !important;
        margin-left: 16px;
        margin-top: 24px;
    }

    .gamerCell {
      height: 41px !important; 
      display: flex;
    }

    .expandLink {
        width: 100%;
        text-align: right;
        margin-top: 8px;
        padding-right: 24px;
        display: block;
        font-size: 12px;
    }

    .banner {
        height: 39px;
    }
</style>