import GeneralView from "@/views/GeneralView.vue"
import PeopleView from "@/views/PeopleView.vue"
import PersonView from "@/views/PersonView.vue"
import NotFoundView from "@/views/NotFound.vue"
import StarShipsView from "@/views/StarShipsView.vue"
import OneStarShipView from "@/views/OneStarShipView.vue"
import {createRouter, createWebHistory } from 'vue-router'
const routes = [
    { path: "/", name: 'General', component: GeneralView},
    { path: "/people", name: 'People', component: PeopleView},
    { path: "/people/:personId", name: 'Person', component: PersonView},
    { path: '/:pathMatch(.*)*', component: NotFoundView},
    { path: '/starships', name: 'StarShips', component: StarShipsView},
    { path: "/starships/:shipId", name: 'StarShip', component: OneStarShipView},
]

const router = createRouter({history: createWebHistory(), routes})

export default router