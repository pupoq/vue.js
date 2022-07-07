<template>
    <div>
        <router-link class="pad" to="/">General</router-link>
        <router-link class='pad' to="/people">People</router-link>
        <router-link class='pad' to="/starships">StarShips</router-link>
    </div>
</template>

<script>
export default ({
    
})
</script>

<style scoped>
    .pad {
        padding: 10px;
        text-decoration: none;
        background: linear-gradient(white, rgb(207, 207, 207));
        margin-left: 10px;
        border-radius: 10px;
    }


</style>