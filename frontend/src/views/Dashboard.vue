<script setup>
    import NavBar from "@/components/NavBar.vue";
    import {useRouter} from "vue-router";
    import {AUTH_STORAGE_KEY} from "../consts.ts"; 
    import {onMounted, ref} from "vue";

    const router = useRouter();
    const user = ref(null);

    async function verifyAuthtoken(token) {
        try {
            const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
            const data = await response.json();

            if (data.error) {
                return null;
            }

            return data;
        } catch (error) {
            return null;
        }
    }

    onMounted(async () => {

        const token = localStorage.getItem(AUTH_STORAGE_KEY);
        if (!token) router.push("/login");

        const userInfo = await verifyAuthtoken(token);
        if (!userInfo) router.push("/login");

    })
</script>

<template>
    <NavBar><button>this is inside the navbar</button></NavBar>
    <p>this is the dashboard</p>

</template>