<template>
    <div>
    <br>

        <star-ships-list @select="onSelectPerson" />
        <one-star-ship-view
        :selectedShip="selectedShip"
        v-if="selectedShip !== null"
        />
    </div>
</template>
    
    <script>
import StarShipsList from "../components/StarShipsList.vue";
import OneStarShipView from './OneStarShipView.vue';
export default {
  components: { StarShipsList, OneStarShipView },
  name: "App",
  data() {
    return {
      selectedShip: null,
    };
  },
  methods: {
    onSelectPerson(id) {
      this.selectedShip = id;
    },
  },
};
</script>
