<template>
    <header class="navbar">
        <div class="navbar-left"><slot name="left"></slot></div>
        <div class="navbar-center"><slot name="center"></slot></div>
        <div class="navbar-right"><slot name="right"></slot></div>
    </header>
</template>


<style scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: var(--vt-c-black);
        color: var(--vt-c-white);
        position: sticky;
        top: 0;
        left: 0;
        right:0;
        z-index: 100;


    }

    .navbar-left,
    .navbar-center,
    .navbar-right {
        display: flex;
        align-items: center;
    }

    .navbar-center {
        justify-content: center;
        flex-grow: 1;
    }
</style>