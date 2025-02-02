<script setup>
    import NavBar from "@/components/NavBar.vue";
    import {useRouter} from "vue-router";
    import {ADD_SOURCE_PATH} from "../consts.ts";

    const router = useRouter();

    const addSourceRedirect = () => {
        router.push(ADD_SOURCE_PATH);
    }
</script>

<template>
    <div class="dashboard-page">
        <NavBar>
    <template #left>
    </template>
    
    <template #center>
      <h1>Home</h1>
    </template>
    
    <template #right>
      <button @click="addSourceRedirect">Add Source</button>
    </template>
  </NavBar>
    <p>this is the dashboard</p>
        
    </div>
    

</template>

<style scoped>
    .dashboard-page {
        height: 100%;
    }
</style>