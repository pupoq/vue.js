<template>
  <div class="list">
    <div v-for="item in list" :key="item.id" @click="$router.push({name: 'StarShip', params: {shipId: item.id}})">
      {{ item.name }}
    </div>
    <!-- <router-link :to="`/people/${item.id}`" v-for="item in list" :key="item.id">
      {{ item.name }}
      <br>
    </router-link> -->
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
      const res = await swapiService.getStarShips();
      this.list = res;
    },
  },
  created() {
    this.getData();
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