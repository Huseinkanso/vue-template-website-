<template>
  <div class="">
    <div class="landing pt-4 my-4">
      <div class="container mb-5">
        <headLanding :img="require('../img/service/head.png')" title="FAQ" par="Find the answers to your most burning questions"/>
      </div>
      <div class="link ">
        <a href="#content">
          <img class="" src="../img/service/link.png" alt="">
        </a>
      </div>
    </div>
    <div class="content" id="content">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-sm-4 col-8 mx-sm-0 mx-auto text-sm-start text-center">
            <SideInfo/>
          </div>
          <div class="col-8 mx-sm-0 mx-auto  text-sm-start text-center">
            
            <div  v-for="txt in state.sidebar.address" :key="txt" data-aos="fade-left" class="mb-3">
              <h2>{{txt}} </h2>
              <AccordionView />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headLanding from '@/components/headLanding.vue';

import AccordionView from '@/components/Accordion.vue';
import { reactive } from '@vue/reactivity';
import SideInfo from '@/components/SideInfo';
export default {
  name:"FaqView",
  components:{
    headLanding,
    AccordionView,
    SideInfo,
  },
  setup(){
    const state=reactive({
      sidebar:{
        address:["general","design","other"],
        contact:["800-234-567","961-76/36/24/53"],
        
      }
    })


    return {state}
  } 
}
</script>

<style lang="scss">
@import '@/scss/utilities/mixins';

</style>