import './assets/main.css'

import { createApp } from 'vue';
import createGoogleLogin from 'vue3-google-login';
import App from './App.vue';
import router from './router';

const googleClientId = process.env.VITE_APP_GOOGLE_CLIENT_ID;
const app = createApp(App)


app.use(router);
app.use(createGoogleLogin, {
    clientId: googleClientId,
});

app.mount('#app')
