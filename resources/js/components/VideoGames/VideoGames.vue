<template>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <div class="row">
      <div class="col-md-3 col-sm-12 pb-4">
        <game-filter
          @filterChanged="getFilteredData"
        ></game-filter>
      </div>
      <div class="col-md-9 col-sm-12 pb-4">
        <games :games="filteredGames"></games>
      </div>
    </div>
  </div>
</template>

<script>
import Games from "./Games";
import GameFilter from "./GameFilter";

export default {
  data() {
    return {
      filteredGames: null,
      games: null,
      loading: false,
      error: false,
    };
  },

  created() {
    this.loading = true;
    const url = `https://public.connectnow.org.uk/applicant-test/. `;
    axios
      .get(url)
      .then((response) => {
        this.games = response.data;
        this.filteredGames = this.games;
      })
      .then(() => {
        this.loading = false;
      })
      .catch((err) => {});
  },

  components: {
    Games,
    GameFilter,
  },

  methods: {
    getFilteredData(value) {
       let fGames = this.games.filter(function (game) {
        if (
          (value?.nameSearch?.length > 0
            ? game.name.toLowerCase().includes(value.nameSearch.toLowerCase())
            : true) &&
          (value?.rateSearch?.length > 0
            ? String(Math.round(game.rating) / 10).includes(value.rateSearch)
            : true)
        )
          return true;
      });

 if (value.orderBy === "relaseDate") {
        fGames = fGames.sort((a, b) => b.first_release_date - a.first_release_date);
      }
      if (value.orderBy === "score") {
        fGames = fGames.sort((a, b) => b.rating - a.rating);
      }
      if (value.orderBy === "name") {
        function compare(a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        }
       fGames = fGames.sort(compare);
      }

      this.filteredGames = fGames;

    },


  },
};
</script>

<style scoped>
.col-md-3 {
  padding-right: 40px;
}

.col-md-9 {
  padding-bottom: 30px;
}
</style>
