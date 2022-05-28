<template>
  <div class="row">
    <div class="card">

      <div class="card-body">
        <div class="filter-values">
          <h5>Filter Results</h5>

        </div>

        <div class="filter-values">
          <label for="name">Name(contains)</label>
          <input
            type="text"
            v-model="nameSearch"
            @keyup="emitFilter"
            name="name"
            class="form-control form-control-sm"
            placeholder="Text string"
          />
        </div>

        <div class="filter-values">
          <label for="minimumScore">Minimum Score</label>
          <input
            type="text"
            v-model="rateSearch"
             @keyup="emitFilter"
            name="minimumScore"
            class="form-control form-control-sm"
            placeholder="1-10"
          />
        </div>
        <div class="filter-values">
          <label for="orderBy">Order By</label>
          <select
            class="form-select form-select-sm"
            id="floatingSelect"
            aria-label="Floating label select example"
            @change="emitFilter"
            v-model="orderBy"
          >

            <option value="relaseDate">Release Date</option>
            <option value="score">Score</option>
            <option value="name">Name</option>
          </select>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button @click="emitFilterClear" class="btn-sm" type="button">Clear</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      nameSearch: null,
      rateSearch: null,
      orderBy: null,
      clear:null,
    };
  },

  methods: {
      emitFilter(){
          this.$emit("filterChanged",{"nameSearch":this.nameSearch, "rateSearch":this.rateSearch,"orderBy":this.orderBy,},"clear")
      },

      emitFilterClear(){
          this.nameSearch = null;
          this.rateSearch = null;
          this.orderBy = null;
          this.$emit("filterChanged",{"nameSearch":this.nameSearch, "rateSearch":this.rateSearch,"orderBy":this.orderBy,},"clear")
      },




  },

};
</script>

<style scoped>
.filter-values {
  padding-bottom: 25px;
}

h5 {
  font-weight: bolder;
}

label {
  font-weight: bolder;
}
</style>
