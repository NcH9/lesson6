import './assets/main.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

import App from './App.vue';
import router from './router/index';

const pinia = createPinia();

const app = createApp(App);

app.use(vuetify);
app.use(pinia);
app.use(router);

app.mount('#app');