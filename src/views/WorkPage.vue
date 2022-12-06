<template>
    <div class="">
      <div class="landing pt-4 my-4 mb-5">
        <div class="container mb-5">
          <headLanding :img="require('../img/service/head.png')" title="works" par="Find the latest changes made to this template"/>
        </div>
        <div class="link ">
          <a href="#content">
            <img class="" src="../img/service/link.png" alt="">
          </a>
        </div>
      </div>
      <div class="mt-5" id="content">
        <div class="container">
          <div class="row justify-content-center justify-content-sm-between">
            <WorkVue v-for="w in state.works" :key="w" :title="w.title" :img="w.img" />
          </div>
        </div>
      </div>    
    </div>
  </template>
  
  <script>
  import headLanding from '@/components/headLanding.vue';
  import WorkVue from '@/components/WorkView.vue';
import { reactive } from '@vue/reactivity';

  export default {
    components:{
      headLanding,
      WorkVue
  
    },
    name:"WorkPage",
    setup(){
        const state=reactive({
            works:[
                {
                    img:require('../img/work/work1.jpg'),
                    title:"branding",
                },
                {
                    img:require('../img/work/work6.jpg'),
                    title:"web design",
                } ,
                {
                    img:require('../img/work/work3.jpg'),
                    title:"web design",
                },
                {
                    img:require('../img/work/work4.jpeg'),
                    title:"branding",
                },
                {
                    img:require('../img/work/work2.jpg'),
                    title:"Social Media",
                },
                
                
                {
                    img:require('../img/work/work5.jpeg'),
                    title:"Social Media",
                },
                                                                                               
            ]
        })
        return {state}
    }
  }
  </script>
  
  <style>
  
  </style>