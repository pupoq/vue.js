<template>
    <div>
    <br>

        <person-list @select="onSelectPerson" />
        <person-view
        :selectedPerson="selectedPerson"
        v-if="selectedPerson !== null"
        />
    </div>
</template>
    
    <script>
import PersonView from "./PersonView.vue";
import PersonList from "../components/PersonList.vue";
export default {
  components: { PersonList, PersonView },
  name: "App",
  data() {
    return {
      selectedPerson: null,
    };
  },
  methods: {
    onSelectPerson(id) {
      this.selectedPerson = id;
    },
  },
};
</script>
