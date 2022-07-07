<template>
  <div class="list">
    <!-- <div v-for="item in list" :key="item.id" @click="$router.push({name: 'Person', params: {personId: item.id}})">
      {{ item.name }}
    </div> -->
    <router-link :to="`/people/${item.id}`" v-for="item in list" :key="item.id">
      {{ item.name }}
      <br>
    </router-link>
    <!-- <div v-if="list.list !== null" @click="getNewPeople()"> >
    </div> -->
  </div>
</template>

<script>
import swapiService from "@/services/swapiService";
export default {
  emits: ["select"],
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async getData() {
      const res = await swapiService.getPeople();
      this.list = res.results;
      console.log(res.results)
    },
    // async getNewPeople() {
    //   const res = await swapiService.getNextPeople();
    //   this.list = res;
    //   console.log(this.list.data)
    // },
  },
  created() {
    this.getData();
    // this.getNewPeople();
  },
};
</script>
<style scoped>
.list {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 12px;
}
</style>