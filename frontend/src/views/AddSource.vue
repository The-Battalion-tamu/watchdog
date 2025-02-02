<script setup>
    import NavBar from "@/components/NavBar.vue";
    import {useRouter} from "vue-router";
    import {HOME_PATH} from "../consts.ts";
    const router = useRouter();
    const homeRedirect = () => {
        router.push(HOME_PATH);
    }

</script>

<template>
    <NavBar>
        <template #left>
            <button @click="homeRedirect">Back</button>
        </template>

    <template #center>
    <h1>Add Source</h1>
    </template>

    <template #right>
    </template>
    </NavBar>
     
    <p>Add source page</p>
</template>