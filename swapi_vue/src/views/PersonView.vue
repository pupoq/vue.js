<template>
  <div>
    <h1>Props:{{ selectedPerson }}</h1>
    <h3>Name: {{ person.name }}</h3>
    <p>Eye Color: {{ person.eyeColor }}</p>
    <p>Birth Year: {{ person.birthYear }}</p>
  </div>
</template>

<script>
import swapiService from "@/services/swapiService";
export default {
  data() {
    return {
      person: {},
      selectedPerson: null
    };
  },
  watch: {
    selectedPerson() {
      this.getData();
    },
  },
  methods: {
    async getData() {
      const res = await swapiService.getPerson(this.selectedPerson);
      console.log(res)
      this.person = res.results;
    },
  },
  created() {
    console.log(this.$route)
    this.selectedPerson = this.$route.params.personId
    this.getData();
  },
};
</script>