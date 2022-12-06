import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import "bootstrap" 

import "./scss/main.scss"

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

var app=createApp(App)

// app.directive('loaded', {
//     beforeMount(el){
//         el.style.cssText = `display:block;margin:0;`
//     }
// })

app.use(store).use(router).mount('#app')
