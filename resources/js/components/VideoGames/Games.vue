<template>
  <div class="row">
    <div v-for="(game, index) in games" :key="index">
      <div class="card">
        <div class="card-body">
          <h5>{{ game.name }}</h5>
          <p>Release Date: {{ game.first_release_date | dateFormat }}</p>

          <div class="d-flex justify content">
            <article>[Summary] {{ game.summary }}</article>

            <div class="white-box">
              {{ roundRating(game.rating) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["games"],

  data() {
    return {
      games: null,
      loading: false,
      error: false,
    };
  },

  methods: {
    roundRating(value) {
      return Math.round(value) / 10;
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 10px;
}

h5 {
  font-weight: bolder;
}

.white-box {
  border-radius: 20px;
  background-color: blue;
  height: 30px;
  margin: 10px;
  padding: 10px;
  position: absolute;
  right: 10px;
}
</style>
