<template>
  <div>
    <h1>Props:{{ selectedShip }}</h1>
    <h3>Name: {{ person.name }}</h3>
    <p>Price: {{ person.costInCredits }}</p>
  </div>
</template>

<script>
import swapiService from "@/services/swapiService";
export default {
  data() {
    return {
      person: {},
      selectedShip: null
    };
  },
  watch: {
    selectedPerson() {
      this.getData();
    },
  },
  methods: {
    async getData() {
      const res = await swapiService.getOneStarShip(this.selectedShip);
      this.person = res;
    },
  },
  created() {
    console.log(this.$route)
    this.selectedShip = this.$route.params.shipId
    this.getData();
  },
};
</script>