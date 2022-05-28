<template>
  <div class="row">
    <div v-for="(game, index) in games" :key="index">
      <div class="card">
        <div class="row">
          <div class="imgfield col-md-2">

          </div>
          <div class="col-md-10">
            <div class="card-body">
              <h5>{{ game.name }}</h5>
              <p>Release Date: {{ game.first_release_date | dateFormat }}</p>

              <div class="d-flex justify-content-between">
                <article>[Summary] {{ game.summary }}</article>

                <button class="deneme" type="button" disabled>
                  {{ roundRating(game.rating) }}
                </button>
              </div>
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

.imgfield{
    background-color: black;
}

h5 {
  font-weight: bolder;
}

.sumrating {
  display: flex;
}

button {
  border-radius: 50%;
  height: 45px;
  min-width: 45px;
  float: right;
  position: static;
  padding: 8px;
  margin: 15px;
  font-size: 1.1rem;

}
</style>
