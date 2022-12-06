<template>
    <div data-aos="fade-right" class="address my-2">
        <p class="fs-3">address</p>
        <ul class="list-unstyled">
          <li  v-for="ad in state.sidebar.address" :key="ad">
            <a href="">{{ad}} </a>
          </li>
        </ul>
      </div>
      <div data-aos="fade-right" class="contact my-4">
        <p class="fs-3">contact-us</p>
        <ul class="list-unstyled">
          <li v-for="c in state.sidebar.contact" :key="c">
            <a href="">{{c}} </a>
          </li>
        </ul>
      </div>
      <div data-aos="fade-right" class="question my-4">
        <h5 class="my-4">drop us an email and we'll be in touch asap</h5>
        <a href="">kanso275@gmail.com</a>
      </div>
      <div class="social my-4">
        <socialMedia/>
      </div>
</template>

<script>
import socialMedia from '@/components/socialMedia';
import { reactive } from '@vue/reactivity';
export default {
    components:{
        socialMedia,
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
.content{
    a{
      color:purple !important;
      transition: 0.4s;
      &:hover{
        color:gainsboro !important;
      }
    }
    ul{
      li{
        font-size: 20px;
        padding: 5px;
        margin: 5px 0;      
      }
    }
    .social{
      .icons{
        justify-content: start;
      }
    }
  }
</style>