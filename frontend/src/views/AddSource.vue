<script setup>
    import NavBar from "@/components/NavBar.vue";
    import {useRouter} from "vue-router";
    import {HOME_PATH} from "../consts.ts";
    import {ref} from "vue";
    
    const router = useRouter();
    const homeRedirect = () => {
        router.push(HOME_PATH);
    }

    let validFormInput = ref(false);

    const testUrl = () => {
        validFormInput = !validFormInput;
    }

</script>

<template>
    <div>
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

    <form v-on:submit="">

    <br>

    <div class="container">
        <input class="myinput-link solo" placeholder="Name" />
    </div>

    <br>

    <div class="container">
        <span class="prefix">http://</span>
        <input class="myinput-link" placeholder="rssfeed.com" />
        <span class="link-icon">
            🔗
        <span class="tooltip">COPY</span>
    </span>

</div>

<br>

<div class="">
    <button @click="testUrl">Test URL</button>
    <button type="submit" disabled={validFormInput}>Submit</button>
</div>


    </form>
    
</div>

</template>

<style scoped>

form {
    padding: 10px;
    border: 10px;
}

.solo {
    border-radius: 10px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 270px;
  height: 50px;
  border-radius: 10px;
  position: relative;
  border: 2px solid #000000;
}

.prefix {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 100%;
  width: 30%;
  font-weight: 600;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 10px 0px 0px 10px;
}

.myinput-link {
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  font-weight: 500;
  border: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 0px 10px;
  height: 100%;
  width: 100%;
  background-color: #fff;
  font-size: 15px;
}

.link-icon {
  font-size: 16px;
  background-color: #fff;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
  position: relative;
}

.tooltip {
  position: absolute;
  top: -40px;
  right: -10px;
  opacity: 0;
  background-color: #ffe53b;
  background-image: linear-gradient(147deg, #f0f0f0 0%, #000000 74%);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.2s;
  pointer-events: none;
  letter-spacing: 0.5px;
  z-index: 10;
}

.tooltip::before {
  position: absolute;
  content: "";
  width: 10px;
  height: 10px;
  background-color: #000000;
  background-size: 1000%;
  background-position: center;
  transform: rotate(45deg);
  bottom: -15%;
  transition-duration: 0.3s;
}

.link-icon:hover .tooltip {
  opacity: 1;
  transition-duration: 0.3s;
}

button {
 appearance: none;
 background-color: transparent;
 border: 0.125em solid #1A1A1A;
 border-radius: 0.9375em;
 box-sizing: border-box;
 color: #3B3B3B;
 cursor: pointer;
 display: inline-block;
 font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
 font-size: 16px;
 font-weight: 600;
 line-height: normal;
 margin: 0;
 min-height: 3.75em;
 min-width: 0;
 outline: none;
 padding: 1em 2.3em;
 text-align: center;
 text-decoration: none;
 transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 will-change: transform;
}

button:disabled {
 pointer-events: none;
}

button:hover {
 color: #fff;
 background-color: #1A1A1A;
 box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
 transform: translateY(-2px);
}

button:active {
 box-shadow: none;
 transform: translateY(0);
}


</style>