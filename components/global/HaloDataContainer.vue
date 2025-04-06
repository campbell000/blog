<script>
  export default {
    props: {},
    methods: {
      convertb64ToBlobUrl(b64Data, contentType='', sliceSize=512) {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, {type: contentType});
        return URL.createObjectURL(blob);
      },

      copyToClipboard(e) {
        e.preventDefault();
        e.stopPropagation();
        let copiedString = "########### Halo Stats for"+ this.haloData["weekly"]["week"]+" ###########\n\n";
        for (let i = 0; i < Object.keys(this.catKeys).length; i++) {
          const catKey = Object.keys(this.catKeys)[i];
          copiedString += "===== "+this.catKeys[catKey]['title']+" =====\n"
          for (let j = 0; j < this.haloData['weekly']['data'][catKey].length; j++) {
            const datum = this.haloData['weekly']['data'][catKey][j];
            copiedString += datum.name+": "+datum.value+"\n";
          } 
          copiedString += "\n";
        }
        navigator.clipboard.writeText(copiedString); 
      }
    },

    mounted() {
      this.$axios.get(`/halodata/results.json`).then((response) => {
        this.haloData = response.data;
        Object.keys(this.haloData['profiles']).forEach((gamertag) => {
          if (this.haloData['profiles'][gamertag]) {
            console.log(gamertag);
            this.profileData[gamertag] = this.convertb64ToBlobUrl(this.haloData['profiles'][gamertag], 'image/png');
          }
        });

        const catsForMedals = [
          "kdDestroyer",
          "objectivePlayer",
          "luckyCharm",
          "badOmen",
          "watchYourStep",
          "looseCannon",
          "killingMachine",
          "sharpshooter",
          "perfectAttendance"
        ];
        
        Object.keys(this.medalists).forEach(element => {
          let data = null;
          if (element == 'weekly') {
            data = this.haloData[element]['data'];
          } else {
            data = this.haloData[element];
          }
          this.haloData[element];
          catsForMedals.forEach(catName => {
            for (let i = 0; i <= 2; i++) {
              const datum = data[catName][i];
              let val = this.medalists[datum.name];
              if (val == null) {
                this.medalists[datum.name] = 0;
              }
              this.medalists[datum.name] = this.medalists[datum.name] + (3 - i);
            }
          });
        });
      });
    },
    data() {
      return {
        haloData: null,
        profileData: {},
        medalists: {
          weekly: {},
          monthly: {}
        },
        tab: null,
        catKeys: {
          "kdDestroyer": {
            title: "The Grim Reapers",
            description: "Average Kill/Death Ratio per Game",
            scoreName: "K/D"
          },
          "objectivePlayer": {
            title: "Objective Oriented",
            description: "Average Score in an Objective game (FYI: Flag caps = 50 points) per Game",
            scoreName: "Score"
          },
          "luckyCharm": {
            title: "Lucky Charms",
            description: "Average Number of Wins per Game",
            scoreName: "Luck"
          },
          "badOmen": {
            title: "Bad Omens",
            description: "Average Number of Losses per Game",
            scoreName: "Curse Strength"
          },
          "watchYourStep": {
            title: "Watch Your Step",
            description: "Average Number of Deaths per Game",
            scoreName: "# Slipped Banana Peels"
          },
          "looseCannon": {
            title: "Loose Cannons (Who Don't Play by the Rules)",
            description: "Average number of kills AND deaths per game",
            scoreName: "Chaos Factor"
          },
          "killingMachine": {
            title: "Killing Machines",
            description: "Average Number of Kills per Game",
            scoreName: "Kills per Game"
          },
          "sharpshooter": {
            title: "Sharpshooters",
            description: "Average Number of Headshots per Game",
            scoreName: "Headshots"
          },
          "perfectAttendance": {
            title: "Perfect Attendance Nerds",
            description: "Most games played during Halo Night (tm)",
            scoreName: "Games Played"
          },
          "weMissYou": {
            title: "We Miss You",
            description: "Please Play Halo Again",
            scoreName: "Last Seen"
          }
        }
      }
    },
  }
</script>

<template>
  <div class="haloTabs">
    <v-card v-if="haloData != null">
      <v-tabs v-model="tab" fixed-tabs>
        <v-tab key="month">Past Month</v-tab>
        <v-tab key="recent">
          Most Recent<!--()--> 
        </v-tab>
      </v-tabs>


      <v-tabs-items v-model="tab" class="haloTabs">
        <v-tab-item key="month">
          <HaloDataTable v-for="(catKey) in Object.keys(catKeys)"  :data="haloData['monthly'][catKey]" 
            :title="catKeys[catKey]['title']" :scoreName="catKeys[catKey]['scoreName']" :description="catKeys[catKey]['description']"
            :profileData="profileData" :auxData="haloData['lastSeen']"></HaloDataTable>
        </v-tab-item>
        <v-tab-item key="recent">
          <div class="recentWeek">Week of {{ haloData["weekly"]["week"]}}
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  outlined
                  v-bind="attrs"
                  v-on="on"
                  color="primary"
                  @click="copyToClipboard($event)"
                  >
                  <v-icon dark color="primary">
                    mdi-content-copy
                  </v-icon>
                </v-btn>
              </template>
              <span>Copy Results to Clipboard</span>
            </v-tooltip>

            
            
          </div>
          <HaloDataTable v-for="(catKey) in Object.keys(catKeys)"  :data="haloData['weekly']['data'][catKey]" 
            :title="catKeys[catKey]['title']" :scoreName="catKeys[catKey]['scoreName']" :description="catKeys[catKey]['description']"
            :profileData="profileData" :auxData="haloData['lastSeen']"></HaloDataTable>
        </v-tab-item>
        <v-icon
          color="primary">
          mdi-information-outline
        </v-icon>
      </v-tabs-items>
    </v-card> 
    <h3 style="margin-top: 16px">😫😫 Players with Missing Data: 😫😫</h3>
    <ul v-if="haloData != null">
      <li v-for="player of haloData.missingData">{{ player }}</li>
    </ul>
  </div>
</template>

<style>
  .copyButton {
    margin-left: 16px;
  }

  .haloTabs .v-slide-group__prev {
    display: none !important;
  }

  .recentWeek {
    margin-top: 16px;
  margin-left: 16px;
  }

</style>